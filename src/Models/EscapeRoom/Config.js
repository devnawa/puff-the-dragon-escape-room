import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js"

const ScreenTitle = "Test Title"
const ScreenDescription = "Test Description"
const ScreenFooter = "Test Footer"

const Room1Label = "Test Label 1"
const Room2Label = "Test Label 2"
const Room3Label = "Test Label 3"
const Room4Label = "Test Label 4"

const Resonse_PrevRoomFail = "To move to this room, you must first find the password to the previous room."
const Response_PasswordCheck = "Checking if the password you enter is matches with room..."
const Response_PasswordWrong = "The password you entered is incorrect."
const Response_PasswordCorrect = "The password you entered is correct, congratulations!"

const Modal_Title = "Enter Password"
const Modal_Label = "Password"
const Modal_Placeholder = "Enter password here."


const MainScreen = new EmbedBuilder()
.setTitle(ScreenTitle)
.setDescription(ScreenDescription)
.setFooter({ text : ScreenFooter })

const Buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId("join1").setLabel(Room1Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join2").setLabel(Room2Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join3").setLabel(Room3Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join4").setLabel(Room4Label).setStyle(ButtonStyle.Primary)
)

export const EscapeRoomConfig = {
    MainScreen,
    Buttons
}

export const EscapeRoomTexts = {
    Resonse_PrevRoomFail,
    Response_PasswordWrong,
    Response_PasswordCorrect,
    Response_PasswordCheck,
    Modal_Title,
    Modal_Label,
    Modal_Placeholder
}
