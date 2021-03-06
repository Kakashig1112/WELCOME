import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
                `*ð®ð¦ðð½ð½ð¼ð¿ð ðð¿ð¼ðð½ð*\n\n
                 *ãÖAÆ¤Æ¤ê«É¨âE: REð²ã*:https://chat.whatsapp.com/IvGNhMR6DclEDK0WY9St3r\n\n
                 *ãð¦ð®ð½ð½ðµð¶ð¿ð²: ðð®ðð¶ð»ð¼ð°ã*:https://chat.whatsapp.com/Bxjat9sqPhlDJ7DpP7EW1b                      `,
           MessageType.text
        ))
        const n = [
            './assets/images/yuuki-asuna.jpeg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Regarding this, I have sent you a personal message in your DMðª\n` }
        )

        }
}
