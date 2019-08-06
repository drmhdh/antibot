const Composer = require('telegraf/composer')
const composer = new Composer()
const { onlyPublic } = require('../middlewares')

composer.command('about',
  Composer.branch(onlyPublic,
    (ctx, next) => next(),
    Composer.reply('Este bot puede restringir los usuarios-bot que envían spam con link y pide confirmación de que no se es un BOT para poder estar en el grupo, si es spam o bot elimina el contenido automaticamente.<br>Bot can restrict bot-like user via captha and/or detect and delete ads in chat where it works.', {
      parse_mode: 'HTML',
      disable_web_page_preview: true
    })
  )
)

module.exports = bot => {
  bot.use(composer.middleware())
}
