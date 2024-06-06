import { PermissionFlagsBits, SlashCommandBuilder } from "discord.js";
import { EscapeRoomConfig } from "../../Models/EscapeRoom/Config.js";

export default {
    data : new SlashCommandBuilder()
    .setName("escaperoom")
    .setDescription("Commands for the Escape Room")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    execute : async interaction => {


        await interaction.channel.send({
            embeds : [EscapeRoomConfig.MainScreen],
            components : [EscapeRoomConfig.Buttons]
        }).then(async () => {
            await interaction.reply({ content : "Main screen is sent.", ephemeral : true})
        })

    }
}