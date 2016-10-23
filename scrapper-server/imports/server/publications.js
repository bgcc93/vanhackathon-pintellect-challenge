import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Articles } from '/imports/lib/collections';

Meteor.publish('articles', () => {
  return Articles.find();
});

Meteor.publish('article', (id) => {
  check(id, String);
  return Articles.find({ _id: id });
});
