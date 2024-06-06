import { PermissionFlagsBits } from "discord.js"
import DB from "./Database.js"

export class EscapeRoom {

    static GetEscapeRoom = (order = null) => {
        if (order == null){
            var rooms = DB
            if (rooms.length == 0) return null
            return rooms.map(room => new EscapeRoom(room.name, room.channelId, room.password, room.order))
        }
        else{
            var room = DB.find(room => room.order == order)
            if (room == undefined) return null
            return new EscapeRoom(room.name, room.channelId, room.password, room.order)
        }
    }

    constructor(name, channelId, password, order) {
        this.name = name
        this.channelId = channelId
        this.password = password
        this.order = order
    }

    isAuthorized = async (userId, guild) => {
        var channel = await guild.channels.fetch(this.channelId)
        var permissionOverwrites = channel.permissionOverwrites.cache
        var memberOverwrites = permissionOverwrites.get(userId)
        if(!memberOverwrites) return false
        return memberOverwrites.allow.has(PermissionFlagsBits.ViewChannel)
    }

    isPasswordMatches = (input) => {
        return input.toLowerCase() == this.password.toLowerCase()
    }

    addUser = async (userId, guild) => {
        var channel = await guild.channels.fetch(this.channelId)
        var permissionOverwrites = channel.permissionOverwrites
        await permissionOverwrites.edit(userId, {
            ViewChannel : true,
            SendMessages : true
        })
    }

}