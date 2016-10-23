import React from 'react';
import radium from 'radium';
const styles = {
  root: {
    width: '300px',
    boxShadow: '0px 0px 3px 0px rgba(0, 0, 0, 0.3)',
    padding: 20,
    borderRadius: '5px',
    position: 'relative',
    flexBasis: 'auto',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
  },
  h2: {
    marginTop: '0px',
    marginBottom: '5px',
  },
  hr: {
    borderLeft: 'none',
    borderTop: '1px solid rgb(51, 146, 252)',
  },
  p: {
    letterSpacing: '0.1em',
    marginBottom: '31px',
  },

  footer: {
    textAlign: 'right',
  },

  readMoreBtn: {
    padding: '10px 15px',
    fontSize: '0.8em',
    borderRadius: '3px',
    border: 'none',
    color: 'white',
    outline: 'none',
    backgroundColor: '#3392fc',
    position: 'absolute',
    bottom: '13px',
    right: '13px',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: 'rgb(51, 85, 252)',
      cursor: 'pointer',
    },
  },

  siteName: {
    width: '2em',
    position: 'absolute',
    bottom: 10,
  },

};

const Article = ({ _id, title, text, iconSrc, siteName, onReadMoreClick, style }) => {
  const subText = `${text.substr(0, 150)}...`;

  const mergedStyles = Object.assign({}, styles.root, style);

  return (
    <div style={mergedStyles}>
      <h2 style={styles.h2}>{title}</h2>

      <hr style={styles.hr} />
      <p style={styles.p}>{subText}</p>
      <div style={styles.footer}>
        <button onClick={onReadMoreClick} style={styles.readMoreBtn}> Read more </button>
      </div>
    </div>
  );
};

export default radium(Article);
