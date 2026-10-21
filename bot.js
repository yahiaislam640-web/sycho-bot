// ╔════════════════════════════╗
//       SYCHO BOT
//       Developer: Yahia Islam 
// ╚════════════════════════════╝

async function handleCommand(sock, msg, text) {
  const chat = msg.key.remoteJid;

  if (!text || !text.startsWith(".")) return;

  const args = text.trim().split(/\s+/);
  const command = args.shift().slice(1).toLowerCase();
  const input = args.join(" ");

  const reply = async (message) => {
    await sock.sendMessage(
      chat,
      { text: message },
      { quoted: msg }
    );
  };

  switch (command) {

    // ═══ الأوامر العامة ═══

    case "مساعدة":
    case "اوامر":
      return reply(`
╭━━━〔 SYCHO BOT 〕━━━╮
┃
┃ 『 الأوامر العامة 』
┃ .مساعدة
┃ .بوت
┃ .مطور
┃ .معلومات
┃ .وقت
┃ .تاريخ
┃ .منشن
┃ .اقتباس
┃
┃ 『 الأوامر الإسلامية 』
┃ .قران
┃ .احاديث
┃ .دعاء
┃ .اذكار
┃ .استغفار
┃ .توبة
┃
┃ 『 الترفيه 』
┃ .اغنيه
┃ .نكتة
┃ .حكمة
┃ .هلتعلم
┃ .حظ
┃
┃ 『 أدوات النصوص 』
┃ .عكس [نص]
┃ .كرر [نص]
┃ .حروف [نص]
┃ .زخرف [نص]
┃
┃ 『 معلومات 』
┃ .تاريخ
┃ .وقت
┃ .معلومات
┃ .مطور
┃
╰━━━━━━━━━━━━━━━━╯
✦ SYCHO BOT
✦ Developer: Yahia Islam 
`);

    case "بوت":
      return reply("╭━━〔 SYCHO BOT 〕━━╮\n┃ البوت يعمل بنجاح ✓\n╰━━━━━━━━━━━━━━╯");

    case "مطور":
      return reply("✦ اسم المطور: Yahia Islam\n✦ اسم البوت: SYCHO BOT");

    case "معلومات":
      return reply(
        "╭━━〔 معلومات البوت 〕━━╮\n" +
        "┃ الاسم: SYCHO BOT\n" +
        "┃ اللغة: JavaScript\n" +
        "┃ المكتبة: Baileys\n" +
        "┃ المطور: Yahia Islam\n" +
        "╰━━━━━━━━━━━━━━━━╯"
      );

    case "وقت":
      return reply(
        "الوقت الآن: " +
        new Date().toLocaleTimeString("ar-EG", {
          timeZone: "Africa/Cairo"
        })
      );

    case "تاريخ":
      return reply(
        "التاريخ اليوم: " +
        new Date().toLocaleDateString("ar-EG", {
          timeZone: "Africa/Cairo"
        })
      );

    // ═══ الأوامر الإسلامية ═══

    case "قران":
    case "قرآن":
      return reply(
        "﴿ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ﴾\n\n" +
        "﴿ قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ " +
        "لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ ﴾\n\n" +
        "سورة الإخلاص"
      );

    case "احاديث":
    case "حديث":
      return reply(
        "قال رسول الله ﷺ:\n\n" +
        "«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى»\n\n" +
        "رواه البخاري ومسلم."
      );

    case "دعاء":
      return reply(
        "اللهم اغفر لي وارحمني واهدني وعافني وارزقني، " +
        "واجعلني من عبادك الصالحين."
      );

    case "اذكار":
      return reply(
        "🌿 أذكار مختصرة:\n\n" +
        "• سبحان الله.\n" +
        "• الحمد لله.\n" +
        "• لا إله إلا الله.\n" +
        "• الله أكبر.\n" +
        "• أستغفر الله العظيم وأتوب إليه."
      );

    case "استغفار":
      return reply(
        "أستغفر الله العظيم وأتوب إليه.\n" +
        "اللهم اغفر لي ذنبي كله، دقَّه وجلَّه، أوله وآخره."
      );

    case "توبة":
      return reply(
        "﴿ قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنْفُسِهِمْ " +
        "لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ﴾\n\n" +
        "سورة الزمر: 53\n\n" +
        "باب التوبة مفتوح، فلا تيأس من رحمة الله."
      );

    // ═══ أوامر الترفيه ═══

    case "اغنيه":
    case "أغنية":
      return reply(
        input
          ? "🎵 طلب الأغنية: " + input +
            "\nميزة البحث عن الأغاني وتشغيلها تحتاج إلى ربط خدمة صوتية."
          : "اكتب اسم الأغنية بعد الأمر.\nمثال: .اغنيه اسم الأغنية"
      );

    case "نكتة":
      return reply(
        "واحد مبرمج راح للدكتور، قاله: كل ما أشرب شاي عيني بتوجعني!\n" +
        "قاله الدكتور: جرّب تشيل المعلقة من الكوباية."
      );

    case "حكمة":
      return reply(
        "لا تتوقف عندما تتعب، توقف عندما تنتهي.\n" +
        "النجاح محتاج صبر واستمرار."
      );

    case "هلتعلم":
      return reply(
        "هل تعلم؟\n\n" +
        "أن الأخطبوط لديه ثلاثة قلوب، ودمه أزرق بسبب نوع البروتين الذي ينقل الأكسجين."
      );

    case "حظ":
      return reply(
        "🍀 حظك مش بيتحدد برسالة، لكن اجتهادك واختياراتك بيصنعوا فرقًا."
      );

    // ═══ أدوات النصوص ═══

    case "كرر":
      if (!input) return reply("اكتب النص بعد الأمر.\nمثال: .كرر أهلا");
      return reply(input.slice(0, 1000));

    case "عكس":
      if (!input) return reply("اكتب النص بعد الأمر.\nمثال: .عكس مرحبا");
      return reply([...input].reverse().join(""));

    case "حروف":
      if (!input) return reply("اكتب النص بعد الأمر.\nمثال: .حروف محمد");
      return reply("عدد الحروف: " + [...input.replace(/\s/g, "")].length);

    case "زخرف":
      if (!input) return reply("اكتب النص بعد الأمر.\nمثال: .زخرف Yahya");
      return reply(
        "『 " + input + " 』\n" +
        "꧁༺ " + input + " ༻꧂\n" +
        "★彡 " + input + " 彡★\n" +
        "『ツ』" + input + "『ツ』"
      );

    // ═══ أمر غير معروف ═══

    default:
      return;
  }
}

module.exports = { handleCommand };