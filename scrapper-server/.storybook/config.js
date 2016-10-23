import { configure } from '@kadira/storybook';

import '../client/main.css';

function loadStories() {
  require('../imports/ui/components/Article/stories');
}

configure(loadStories, module);
