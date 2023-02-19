const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
    if (!interaction.isButton()) return;

    const ROLES = {
        ROLE_VATA  : "1068353851142459433",
        ROLE_PITTA : "1068353998198952097",
        ROLE_KAPHA : "1068354066373152899",
    }

    const customId = interaction.customId;
    const role = interaction.guild.roles.cache.get(ROLES[customId.toUpperCase()]);

    if( !role ) return interaction.reply({ content:'Role not found', ephemeral: true })
    
    const hasRole = interaction.member.roles.cache.has(role.id);

    if (hasRole)
      return interaction.member.roles
        .remove(role)
        .then((member) =>
          interaction.reply({
            content: `The ${role} role was removed to you ${member}`,
            ephemeral: true,
          })
        )
        .catch((err) => {
          console.log(err);
          return interaction.reply({
            content: `Something went wrong. The ${role} role was not removed to you ${member}`,
            ephemeral: true,
          });
        });
    else
      return interaction.member.roles
        .add(role)
        .then((member) =>
          interaction.reply({
            content: `The ${role} role was added to you ${member}`,
            ephemeral: true,
          })
        )
        .catch((err) => {
          console.log(err);
          return interaction.reply({
            content: `Something went wrong. The ${role} role was not added to you ${member}`,
            ephemeral: true,
          });
        });
	}
};