const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys');

const pino = require('pino');
const readline = require('readline');
const { handleCommand } = require('./bot');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function startBot() {
  const { state, saveCreds } =
    await useMultiFileAuthState('./session');

  const sock = makeWASocket({
    auth: state,
    logger: pino({ level: 'silent' }),
    printQRInTerminal: false,
    browser: ['SYCHO BOT', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', async (update) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'open') {
      console.log('SYCHO BOT connected successfully!');
    }

    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;

      console.log('Connection closed:', code);

      if (code !== DisconnectReason.loggedOut) {
        setTimeout(startBot, 3000);
      }
    }
  });

  sock.ev.on('messages.upsert', async ({ messages }) => {
    for (const msg of messages) {
      if (!msg.message || msg.key.fromMe) continue;

      try {
        await handleCommand(sock, msg, '');
      } catch (error) {
        console.error('Command error:', error.message);
      }
    }
  });

  if (!state.creds.registered) {
    rl.question(
      'Enter WhatsApp number with country code: ',
      async (number) => {
        try {
          number = number.replace(/\D/g, '');

          const code = await sock.requestPairingCode(number);

          console.log('SYCHO BOT pairing code:', code);
          console.log('Open WhatsApp > Linked Devices > Link with phone number');
        } catch (error) {
          console.error('Pairing error:', error.message);
        }
      }
    );
  }
}

startBot().catch(console.error);