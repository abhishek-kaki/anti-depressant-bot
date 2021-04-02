require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const r = new Snoostorm({
    userAgent: 'anti-depressant-bot',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    username: process.env.REDDIT_USER,
    password: process.env.REDDIT_PASS
});

const client = new Snoostorm(r);

const streamOpts = {
    subreddit: 'testingground4bots',
    results:25
};

const comments = client.CommentStream(streamOpts);

comments.on('comment',(comment)=>{
    console.log(Comment);
});

if(comment.body==='depressed'){
    comment.reply('You can overcome it');
};
