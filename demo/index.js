import React from 'react';
import ReactDOM from 'react-dom';
import BrowserSupport, { detectBrowser } from '../dist'

class Application extends React.PureComponent {
  state = {
    browser: {}
  }
  
  componentDidMount() {
    this.setState({ browser: detectBrowser() })
}

  render() {
    const minBrowserVersions = {
      chrome: '68',
      edge: '6',
      firefox: '19.5',
      ie: '10',
      opera: '10.0',
      safari: '10.2',
    }
    
    console.log('browser', this.state.browser)

    return <div>
      <BrowserSupport supported={minBrowserVersions}/>
      <h1>Hello World!</h1>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
ReactDOM.render(<Application />, document.getElementById('app'));
