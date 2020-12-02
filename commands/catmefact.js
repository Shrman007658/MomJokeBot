const unirest=require('unirest');
module.exports = {
    name:'catmefact',
    description:'Catmefact!',
    execute(message,args)
    {
        message.reply('This API is slow and is free. My master is still trying to consume API\'s Please be patient  🐈 :)');
        var req = unirest("GET", "https://cat-fact.herokuapp.com/facts");        
        req.end(function (res) {
        	if (res.error) throw new Error(res.error);
            

            //The res has all the JSON!! Yumm!!

            catarray=res.body['all'];
            const size=catarray.length;
            const randomfactpos=Math.floor(Math.random() * size)
            //console.log(res.body['all'][randomfactpos].text);
            message.reply(res.body['all'][randomfactpos].text)
            message.reply('Please dont be alarmed if the bot doesnt respond. The API cant handle too many requests at the same time! 🐱 ');
        });
            }
}