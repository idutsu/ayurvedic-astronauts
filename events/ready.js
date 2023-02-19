const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ButtonStyle, Events } = require('discord.js');

require('dotenv').config();
const ROLES_CHANNEL_ID = process.env.ROLES_CHANNEL_ID;

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		//send a message on roles channell
		const channel = client.channels.cache.get(ROLES_CHANNEL_ID);
		channel.send({
			content: 'Choose your constitution if you understand that. Multiple choice is allowed. ',
			components: [
				new ActionRowBuilder().setComponents(
					new ButtonBuilder().setCustomId('role_vata').setLabel('Vata').setStyle(ButtonStyle.Success),
					new ButtonBuilder().setCustomId('role_pitta').setLabel('Pitta').setStyle(ButtonStyle.Danger),
					new ButtonBuilder().setCustomId('role_kapha').setLabel('Kapha').setStyle(ButtonStyle.Primary),
				)
			]
		});
	},
};