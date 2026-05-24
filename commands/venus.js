const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('venus')
        .setDescription('Venus info!'),
    async execute(interaction) {
        try {
            const [venusData] = await Bootprint.getAsync(['venus']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('🌎 Venus')
                .setDescription(venusData.fact)
                .setImage(venusData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Venus data: ', error);
            await interaction.reply('Failed to fetch Venus data.');
        }
    },
};