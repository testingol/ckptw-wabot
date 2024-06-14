const {
    bold,
    monospace
} = require("@mengkodingan/ckptw");
const {
    youtubedl,
    youtubedlv2
} = require("@bochilteam/scraper");
const yts = require("yt-search");
const mime = require("mime-types");

module.exports = {
    name: "play",
    category: "downloader",
    code: async (ctx) => {
        const handlerObj = await global.handler(ctx, {
            banned: true,
            coin: 3
        });

        if (handlerObj.status) return ctx.reply(handlerObj.message);

        const input = ctx._args.join(" ");

        if (!input) return ctx.reply(
            `${global.msg.argument}\n` +
            `Contoh: ${monospace(`${ctx._used.prefix + ctx._used.command} hikaru utada - one last kiss`)}`
        );

        try {
            const apiUrl = createAPIUrl("nyxs", "/ai/gpt", {
                text: input
            });
            const response = await axios.get(apiUrl);

            const data = response.data;
            const audio = data.audio;

            await ctx.reply(
                `❖ ${bold("Play")}\n` +
                "\n" +
                `➲ Judul: ${audio.title}\n` +
                `➲ Artis: ${audio.channel}\n` +
                "\n" +
                global.msg.footer
            );

            return await ctx.reply({
                audio: {
                    url: audio.url,
                },
                mimetype: mime.contentType("mp3"),
                ptt: false
            });
        } catch (error) {
            console.error("Error:", error);
            return ctx.reply(`${bold("[ ! ]")} Terjadi kesalahan: ${error.message}`);
        }
    }
};