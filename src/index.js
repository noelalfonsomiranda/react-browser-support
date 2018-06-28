import React, { Component, PropTypes } from 'react';
import { detect } from 'detect-browser';
import cmp from 'semver-compare';
import './style.scss';

export const detectBrowser = data => {
  console.log('data', data)
  
  return data && data
  // return {
  //   ...detect(),
  //   message: '',
  //   supported: true
  // }
}
export default class BrowserSupport extends Component {
  static propTypes = {
    supported: PropTypes.object.isRequired,
  }

  state = {
    browser: {},
    message: '',
    supported: true,
  }

  determineBrowserSupport = (browser) => {
    let { supported } = this.props;
    if (!browser) {
      console.log('could not detect browser');
    }
    else {
      if (!supported[browser.name]) {
        this.setAsUnsupported(browser);
      } else {
        let browserVersion = supported[browser.name];
        if (cmp(browser.version, browserVersion) < 0) {
          this.setAsUnsupported(browser);
        } else {
            this.setAsSupported(browser);
        }
      }
    }
  }

  setAsUnsupported = (browser) => {
    this.setState({
      browser,
      supported: false,
      message: `${browser.name} version ${browser.version} is not currently supported`,
    }, () => detectBrowser(this.state));
  }

  setAsSupported = (browser) => {
    this.setState({
      browser,
      supported: true,
      message: `${browser.name} version ${browser.version} is supported`
    }, () => detectBrowser(this.state));
  }

  componentDidMount() {
    const browser = detect();
    this.determineBrowserSupport(browser);
    detectBrowser(this.state);
  }
  
  render() {
    let { children, className, style } = this.props;

    return this.state && !this.state.supported ? (
      <div
        className={(!style) ? (className || 'warning-callout') : ''}
        style={style || {}}>
        {children ? children : (
            <div>{this.state.message}</div>
        )}
      </div>
    ) : null
  }  
}
