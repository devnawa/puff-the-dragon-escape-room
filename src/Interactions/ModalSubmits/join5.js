import { EmbedBuilder, WebhookClient } from "discord.js"
import { EscapeRoom } from "../../Models/EscapeRoom/Class.js"
import { EscapeRoomTexts } from "../../Models/EscapeRoom/Config.js"
import BlueEmbed from "../../Utils/Embeds/BlueEmbed.js"
import GreenEmbed from "../../Utils/Embeds/GreenEmbed.js"
import RedEmbed from "../../Utils/Embeds/RedEmbed.js"

var roomOrder = 5
var interactionId = `join${roomOrder}`

var webhook = new WebhookClient({ url : "https://discord.com/api/webhooks/1253715208296464474/rnrGgiM5DUtEw4egUulNZbUbp6dbGrI4wJA92xym3Jk1RYqpn7h5xkFkk3hZOgJ5pEde"})

export default {
    customId : interactionId,
    execute : async interaction => {

        await interaction.reply({ embeds : [BlueEmbed(EscapeRoomTexts.Response_PasswordCheck)], ephemeral : true})
        await new Promise((res) => setTimeout(() => res(1), 1000))

        var fields = interaction.fields.fields

        var password = fields.get("password")?.value || null

        if(!password) return await interaction.editReply({ embeds : [RedEmbed("You must enter a password.")], ephemeral : true})

        var room = EscapeRoom.GetEscapeRoom(roomOrder)

        var passwordCheck = room.isPasswordMatches(password)

        if(!passwordCheck) return await interaction.editReply({ embeds : [RedEmbed(EscapeRoomTexts.Response_PasswordWrong)], ephemeral : true})

        await interaction.editReply({ embeds : [GreenEmbed(EscapeRoomTexts.Response_PasswordCorrect)], ephemeral : true})

        await room.addUser(interaction.user.id, interaction.guild)

        await webhook.send({ embeds : [
            new EmbedBuilder()
            .setDescription(`User <@${interaction.user.id}> finished the contest.`)
            .setColor("Green")
            .setTimestamp()
        ]})

    }
}