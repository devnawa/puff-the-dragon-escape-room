import { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } from "discord.js"
import { EscapeRoom } from "../../Models/EscapeRoom/Class.js"
import { EscapeRoomTexts } from "../../Models/EscapeRoom/Config.js"
import BlueEmbed from "../../Utils/Embeds/BlueEmbed.js"
import RedEmbed from "../../Utils/Embeds/RedEmbed.js"

var roomOrder = 5
var interactionId = `join${roomOrder}`

export default {
    customId : interactionId,
    execute : async interaction => {

        var previousRoom = EscapeRoom.GetEscapeRoom(roomOrder-1)

        if(previousRoom){
            var isAuthorized = await previousRoom.isAuthorized(interaction.user.id, interaction.guild)
            if(!isAuthorized){
                return await interaction.reply({ embeds : [RedEmbed(EscapeRoomTexts.Resonse_PrevRoomFail)], ephemeral : true})
            }
        }

        var room = EscapeRoom.GetEscapeRoom(roomOrder)

        if(await room.isAuthorized(interaction.user.id, interaction.guild)) return await interaction.reply({ embeds : [BlueEmbed("You already have access.")], ephemeral : true})

        var modal = new ModalBuilder().setCustomId(interactionId).setTitle(EscapeRoomTexts.Modal_Title).addComponents(new ActionRowBuilder().addComponents(
            new TextInputBuilder()
            .setCustomId("password")
            .setLabel(EscapeRoomTexts.Modal_Label)
            .setPlaceholder(EscapeRoomTexts.Modal_Placeholder)
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
        ))

        await interaction.showModal(modal)



    }
}