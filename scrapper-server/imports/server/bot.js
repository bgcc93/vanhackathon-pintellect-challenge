import { Meteor } from 'meteor/meteor';

import SlackBot from 'slackbots';

const Bot = new SlackBot({
  token: Meteor.settings.SLACKBOT_TOKEN,
  name: 'pintellect',
});

Bot.on('start', () => {
  console.log('Bot has been started!');
});

export default Bot;
