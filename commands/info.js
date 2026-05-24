const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('About Hubble'),
    async execute(interaction) {
        const { client } = interaction;
        const serverCount = client.guilds.cache.size;
        const userCount = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0);

        const embed = new EmbedBuilder()
            .setColor(0x0000FF)
            .setTitle('🔭 Hubble')
            .setDescription('Explore the universe through images and facts, powered by the Bootprint API.')
            .addFields(
                { name: '📡 Servers', value: `${serverCount}`, inline: true },
                { name: '👥 Users', value: `${userCount}`, inline: true },
                { name: '🌐 Website', value: '[bootprint.space](https://bootprint.space)', inline: true },
                { name: '📖 Docs', value: '[bootprint.space/docs](https://bootprint.space/docs)', inline: true },
                { name: '💬 Discord', value: '[Join](https://discord.gg/nxR5YN6R9q)', inline: true },
                { name: '❤️ Sponsor', value: '[GitHub Sponsors](https://github.com/sponsors/bootprint-space)', inline: true },
            )
            .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};