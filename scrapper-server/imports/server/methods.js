import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { check } from 'meteor/check';
import Bot from './bot';


Meteor.methods({
  getArticleData(url) {
    check(url, String);

    const token = Meteor.settings.DIFFBOT_TOKEN;
    const requestUrl = `http://api.diffbot.com/v3/article?token=${token}&url=${url}`;

    console.log('getArticleAdata: ', requestUrl);
    return HTTP.get(requestUrl);
  },

  botPostMessage(article) {
    check(article, Object);
    this.unblock();

    const message = 'A new article was added.';
    const articleObject = article.objects[0];

    Bot.postMessageToChannel('general', message, {
      as_user: 'pintellect',
      attachments: [{
        color: '#3392fc',
        text: `${articleObject.text.substr(0, 150)}...`,
        author_name: articleObject.author,
        title: article.objects[0].title,
        title_link: `${process.env.ROOT_URL}${article._id}`,
        image_url: article.objects[0].images && article.objects[0].images[0].url,
      }],
    });
  },
});
