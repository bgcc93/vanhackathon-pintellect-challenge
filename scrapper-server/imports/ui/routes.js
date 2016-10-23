import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';
import App from './App';
import Articles from './containers/Articles';
import ArticleContent from './containers/ArticleContent';

FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Articles />,
    });
  },
});

FlowRouter.route('/:_id', {
  action(params, queryParams) {
    mount(App, {
      content: <ArticleContent id={params._id} />,
    });
  },
});
