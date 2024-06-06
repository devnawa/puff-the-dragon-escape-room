import { EscapeRoom } from "../../Models/EscapeRoom/Class.js"
import { EscapeRoomTexts } from "../../Models/EscapeRoom/Config.js"
import BlueEmbed from "../../Utils/Embeds/BlueEmbed.js"
import GreenEmbed from "../../Utils/Embeds/GreenEmbed.js"
import RedEmbed from "../../Utils/Embeds/RedEmbed.js"

var roomOrder = 3
var interactionId = `join${roomOrder}`

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

    }
}