const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('saturn')
        .setDescription('Saturn info!'),
    async execute(interaction) {
        try {
            const [saturnData] = await Bootprint.getAsync(['saturn']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('♃ Saturn')
                .setDescription(saturnData.fact)
                .setImage(saturnData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Saturn data: ', error);
            await interaction.reply('Failed to fetch Saturn data.');
        }
    },
};