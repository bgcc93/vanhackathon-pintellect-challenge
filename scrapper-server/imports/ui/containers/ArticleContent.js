import { Meteor } from 'meteor/meteor';
import { Articles as ArticlesCollection } from '/imports/lib/collections';
import { composeWithTracker } from 'react-komposer';
import ArticleContent from '../components/ArticleContent';
import Spinner from '../components/Spinner';
function compose(props, onData) {
  const sub = Meteor.subscribe('article', props.id);

  if (sub.ready()) {
    onData(null, {
      article: ArticlesCollection.findOne({ _id: props.id }),
    });
  }
}

export default composeWithTracker(compose, Spinner)(ArticleContent);
