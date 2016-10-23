import React from 'react';

import Articles from './containers/Articles';

class App extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default App;
