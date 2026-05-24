const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('sun')
        .setDescription('Sun info!'),
    async execute(interaction) {
        try {
            const [sunData] = await Bootprint.getAsync(['sun']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('☀️ Sun')
                .setDescription(sunData.fact)
                .setImage(sunData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Sun data: ', error);
            await interaction.reply('Failed to fetch Sun data.');
        }
    },
};