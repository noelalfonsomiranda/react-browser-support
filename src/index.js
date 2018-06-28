import React, { Component, PropTypes } from 'react';
const { detect } = require('detect-browser');
// const cmp = require('semver-compare');
import cmp from 'semver-compare';
import './style.scss';

export const detectBrowser = data => {
  if (data)
  return {
    ...detect(),
    message: data.message,
    supported: data.supported
  }

  return {}
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
    componentDidMount() {
      const browser = detect();
      this.determineBrowserSupport(browser);
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
    determineBrowserSupport(browser) {
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
    setAsUnsupported(browser) {
      this.setState({
        browser,
        supported: false,
        message: `${browser.name} version ${browser.version} is not currently supported`,
      }, () => detectBrowser(this.state))
    }
    setAsSupported(browser) {
      this.setState({
        browser,
        supported: true,
        message: `${browser.name} version ${browser.version} is supported`
      }, () => detectBrowser(this.state))
    }
}
