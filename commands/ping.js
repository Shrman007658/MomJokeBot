module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message,args) {
		message.channel.send('Comeon these are simple commands. Oh yeah. Pong.');
	},
};