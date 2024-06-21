import { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } from "discord.js"

const ScreenTitle = "Escape the dark forest"
const ScreenDescription = "Take a trip into the dark forest, discover clues, work out riddles and decode puzzles to be in for a chance to win prizes. Figure out the passwords in each scene to enter the next (scene 1 in Puff Puff Pass) enter your final answer in the last channel to join the leaderboard"

const Room1Label = "Scene 2"
const Room2Label = "Scene 3"
const Room3Label = "Scene 4"
const Room4Label = "Scene 5"
const Room5Label = "Final answer"

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

const Buttons = new ActionRowBuilder().addComponents(
    new ButtonBuilder().setCustomId("join1").setLabel(Room1Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join2").setLabel(Room2Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join3").setLabel(Room3Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join4").setLabel(Room4Label).setStyle(ButtonStyle.Primary),
    new ButtonBuilder().setCustomId("join5").setLabel(Room5Label).setStyle(ButtonStyle.Primary)
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
