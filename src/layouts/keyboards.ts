/**
 * Keyboard Layout Manager
 * @module layouts/keyboards
 */
import { Markup } from 'telegraf'
import { InlineKeyboardMarkup } from 'telegraf/typings/telegram-types'

export const start = Markup.inlineKeyboard([
    [Markup.callbackButton('Show more information', 'help')]
])

export const help = Markup.inlineKeyboard([
    [Markup.urlButton("Announcement's Channel", 'https://t.me/SeventyPlusBIS')]
])
