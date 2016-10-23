import React from 'react';

const styles = {
  root: {
    position: 'absolute',
    left: '50%',
    top: '45%',
  },
};

const Spinner = () => (
  <div style={styles.root}>
    <div className="loading loading--double" />
  </div>
);

export default Spinner;
