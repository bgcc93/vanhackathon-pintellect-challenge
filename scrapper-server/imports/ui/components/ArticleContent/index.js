import React from 'react';

const styles = {
  root: {
    width: '50%',
    margin: '0 auto',
  },
};
const ArticleContent = ({ article }) => {
  return (
    <div style={styles.root}>
      <a href="/"> Back to articles </a>
      <h2> {article.objects[0].title} </h2>
      <div
        className="fade in"
        dangerouslySetInnerHTML={{ __html: article.objects[0].html }}
      />
      <a href="/"> Back to articles </a>
    </div>


  );
};

export default ArticleContent;
