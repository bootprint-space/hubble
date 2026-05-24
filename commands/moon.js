const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moon')
        .setDescription('Information about the Moon.'),
    async execute(interaction) {
        try {
            const [moonData] = await Bootprint.getAsync(['moon']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('🌙 Moon')
                .setDescription(moonData.fact)
                .setImage(moonData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Moon data: ', error);
            await interaction.reply('Failed to fetch Moon data.');
        }
    },
};