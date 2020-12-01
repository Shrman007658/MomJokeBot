module.exports={
    name:'dissme',
    description:'DissMe!',
    execute(message,args){
        //console.log(message);
        message.channel.send('Let us have some corny ass mom jokes on the house!!!');
        const disses=require('../jokes.json')
        var keyCount = Object.keys(disses).length;
        var randnum=Math.floor(Math.random() * keyCount);     // returns a random integer from 0 to 9

        message.reply(disses[randnum]);

    }
}