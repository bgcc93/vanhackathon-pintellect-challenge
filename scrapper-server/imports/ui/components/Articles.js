import React from 'react';
import Article from './Article';

const styles = {
  articles: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  article: {
    margin: '10px',
    flexBasis: 'auto',
  },
};

const Articles = ({ articles, onReadMoreClick }) => (
  <div style={styles.articles} className="fade in">
    {articles.map(article =>
    (<Article
      style={styles.article}
      key={article._id}
      title={article.objects[0].title}
      text={article.objects[0].text}
      iconSrc={article.objects[0].icon}
      siteName={article.objects[0].siteName}
      onReadMoreClick={() => onReadMoreClick(article._id)}
    />))}
  </div>
);

export default Articles;
