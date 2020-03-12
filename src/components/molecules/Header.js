import React from 'react';
import logo from '../../../static/img/ac_Logo.svg';
import wordmark from '../../../static/img/ac-wordmark.svg';

const Header = class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      windowWidth: null,
    };
  }

  componentDidMount() {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  _isMobile() {
    if (this.state.windowWidth < 1024) {
      return true;
    }
    return false;
  }

  render() {
    let opacity = 0;
    let titleClass = "m-header__title";

    if (this._isMobile()) {
      const fadeBegin = 500;
      const fadeFinish = 800;

      const offset = this.props.scrollTop
      opacity = 1;
      if (offset <= fadeBegin) {
        opacity = 0;
      } else if (offset <= fadeFinish) {
        opacity = 0 + offset / fadeFinish;
      }
    }

    if (this.props.pageTitle === "home") {
      titleClass += " -home";
    }

    const headerBackgroundStyle = {
      opacity: opacity,
    }

    return (
      <div>
        <div className="m-header">
          <div className = "m-header__background"  style = { headerBackgroundStyle }></div>
          <div className="o-rhythm__container -fluid">
            <a
              href="/"
              className="m-header__logo">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 47 51" xmlSpace="preserve">
              <g>
                <path className="st0" d="M16.98,29.21c-0.38,4.55,3.01,8.57,7.56,8.95c0.24,0.02,0.47,0.03,0.71,0.03c1.95,0,3.82-0.68,5.33-1.96
                  c0.77-0.65,1.4-1.41,1.88-2.26c1.05,0.85,1.77,1.43,1.89,1.53l2.35-2.89c-4.48-3.64-13.04-10.58-13.32-10.81
                  c-0.83-0.69-1.26-1.64-1.18-2.62c0.14-1.62,1.57-2.83,3.19-2.7c0.79,0.07,1.5,0.43,2.01,1.04c0.14,0.16,0.25,0.34,0.35,0.52
                  l3.15-1.99c-1.06-1.81-2.96-3.09-5.2-3.28c-3.67-0.31-6.91,2.43-7.22,6.1c-0.14,1.66,0.38,3.32,1.41,4.66
                  C18.24,24.94,17.17,26.97,16.98,29.21z M20.69,29.52c0.12-1.42,0.87-2.68,2.03-3.45c1.71,1.39,4.4,3.57,6.77,5.5
                  c-0.27,0.7-0.72,1.33-1.31,1.83c-0.93,0.79-2.11,1.16-3.33,1.06C22.35,34.24,20.48,32.03,20.69,29.52z"/>
                <path className="st0" d="M40.49,40.49c-0.2,0.2-0.38,0.38-0.59,0.57c-3.86,3.64-8.84,5.62-14.1,5.62c-0.24,0-0.47,0-0.71-0.01
                  C13.69,46.28,4.73,36.62,5.11,25.13c0.19-5.57,2.51-10.73,6.55-14.53c4.03-3.8,9.29-5.79,14.81-5.6c5.13,0.17,9.77,2.23,13.28,5.48
                  l3.38-2.13C38.88,4.06,33.07,1.33,26.6,1.11C20.05,0.89,13.79,3.25,9,7.77C4.21,12.28,1.45,18.4,1.23,25
                  C0.77,38.63,11.42,50.09,24.95,50.54c0.28,0.01,0.56,0.01,0.85,0.01c6.25,0,12.18-2.35,16.76-6.67c0.33-0.31,0.64-0.62,0.95-0.95
                  C43.35,42.81,40.66,40.62,40.49,40.49z"/>
              </g>
              </svg>
            </a>
            { // if
              !this.props.hideNavigation &&
              <nav
                className="m-header__navigation"
                role="navigation"
                aria-label="main-navigation">
                <a href="/contact"><span></span>contact</a>
              </nav>
            }
          </div>
        </div>
        <div className = { titleClass }>
            <div className="m-header__page-title">{this.props.pageTitle}</div>
            <img src={wordmark} alt="andculture" />
        </div>
      </div>
    )
  }
}

export default Header;
