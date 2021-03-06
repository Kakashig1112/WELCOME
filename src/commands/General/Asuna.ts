import { MessageType, Mimetype } from '@adiwajshing/baileys'

import { join } from 'path'

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'asuna',

            description: 'Displays the info.',

            category: 'general',

            usage: `${client.config.prefix}asuna`

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        const n = [

            './assets/images/asuna-logo.jpg'

        ]

        let rin = n[Math.floor(Math.random() * n.length)]

        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,

            mimetype: Mimetype.jpeg,

            caption: `ππ ππππΊ π‘ππ\n\nβππ²ππ°πΏπΆπ½ππΆπΌπ»: Maintained fork of void. \n\nπ§©ππΆπ»π: Asuna is not an open source project, therefore you can deploy the main botπ \n\nβ­ *URL:* https://github.com/Issa2001/RIN \n` }

        )

    }

}
