import { Meteor } from 'meteor/meteor';
import { Picker } from 'meteor/meteorhacks:picker';
import { Articles } from '../lib/collections';

import bodyParser from 'body-parser';
import cors from 'cors';

Picker.middleware(bodyParser.json());
Picker.middleware(bodyParser.urlencoded({ extended: false }));
Picker.middleware(cors());

const toJSON = obj => JSON.stringify(obj, null, 2);

const postRoutes = Picker.filter(req => req.method === 'POST');

postRoutes.route('/article/:url', (params, req, res) => {
  const { url } = params;

  Meteor.call('getArticleData', url, (err, result) => {
    if (err) {
      res.statusCode = 500;
      return res.end(toJSON({
        message: 'Ops... We have a problem.',
      }));
    }

    console.log(result);
    const content = JSON.parse(result.content);

    console.log('content.request', content.request);

    if (Articles.findOne({ 'request.pageUrl': content.request.pageUrl })) {
      res.statusCode = 409;
      return res.end(toJSON({
        message: 'This article is already stored.',
      }));
    }

    Articles.insert({ ...content }, (err, _id) => {
      res.statusCode = 200;
      res.end(toJSON(content.objects));

      Meteor.call('botPostMessage', { _id, ...content });
    });
  });
});
