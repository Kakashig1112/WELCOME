import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'issa',
            description: 'Displays info about issa.',
            category: 'general',
            usage: `${client.config.prefix}issa`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/images/issa-logo.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `Hey pal!đI'm Issa, a learner/student & an upcoming developer in the future.
            
đ«đđđđ©đšđŒđ„đ„;
Wa.me/254115175696
Wa.me/16156233842

â­đđđ©đđȘđ;
https://github.com/Issa2001

đźđđŁđšđ©đđđ§đđą;
https://instagram.com/__.i.s.s.a.__

đžđđđĄđđđ§đđą;
t.me/Issa2001

đđżđđšđđ€đ§đ;
ïœđąđđđđđ đČđđđïœ 

âȘŒđČđŸđŸ đđșđ đ` }
        )
    }
}