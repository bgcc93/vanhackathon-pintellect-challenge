import { Meteor } from 'meteor/meteor';
import { Articles as ArticlesCollection } from '/imports/lib/collections';
import { composeWithTracker } from 'react-komposer';
import { FlowRouter } from 'meteor/kadira:flow-router';
import Articles from '../components/Articles';
import Spinner from '../components/Spinner';

function compose(props, onData) {
  const sub = Meteor.subscribe('articles');

  if (sub.ready()) {
    onData(null, {
      articles: ArticlesCollection.find(),
      onReadMoreClick: (_id) => {
        FlowRouter.go('/:_id', { _id });
      },
    });
  }
}
// export default Spinner;
export default composeWithTracker(compose, Spinner)(Articles);
