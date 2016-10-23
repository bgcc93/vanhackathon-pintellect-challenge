import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Article from './index';

const article = {
  _id: 'FdrGLqLn2sbcpmBCi',
  request: {
    pageUrl: 'https://www.youtube.com/user/ExetrizeGamer/videos',
    api: 'article',
    version: 3,
  },
  objects: [
    {
      images: [
        {
          naturalHeight: 900,
          width: 0,
          diffbotUri: 'image|3|1313025127',
          url: 'https://yt3.ggpht.com/-7M63qMsKX10/AAAAAAAAAAI/AAAAAAAAAAA/uGYbZctqrOQ/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
          naturalWidth: 900,
          primary: true,
          height: 0,
        },
      ],
      breadcrumb: [
        {
          link: 'https://www.youtube.com/user/ExetrizeGamer/featured',
          name: 'Home',
        },
        {
          link: 'https://www.youtube.com/user/ExetrizeGamer/playlists',
          name: 'Playlists',
        },
        {
          link: 'https://www.youtube.com/user/ExetrizeGamer/channels',
          name: 'Channels',
        },
        {
          link: 'https://www.youtube.com/user/ExetrizeGamer/discussion',
          name: 'Discussion',
        },
        {
          link: 'https://www.youtube.com/user/ExetrizeGamer/about',
          name: 'About',
        },
      ],
      humanLanguage: 'en',
      icon: 'https://s.ytimg.com/yts/img/favicon-vflz7uhzw.ico',
      diffbotUri: 'article|3|1373643185',
      siteName: 'YouTube',
      pageUrl: 'https://www.youtube.com/user/ExetrizeGamer/videos',
      text: '',
      type: 'article',
      title: "Playback isn't supported on this device.",
    },
  ],
};

storiesOf('Welcome', module)
  .add('default', () => (
    <Article
      title={article.objects[0].title}
      text={article.objects[0].text}
      iconSrc={article.objects[0].icon}
      siteName={article.objects[0].siteName}
    />
  ));
