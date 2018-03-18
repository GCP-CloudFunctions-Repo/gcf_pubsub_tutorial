exports.helloPubSub = (event, callback) => {
	const pubsubMessage = event.data;
	const name = pubsubMessage.data ? Buffer.from(pubsubMessage.data, 'base64').toString() : 'World';
	console.log(`hello, ${name}!`);
	callback();
};
