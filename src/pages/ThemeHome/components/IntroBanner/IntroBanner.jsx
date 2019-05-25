import React, { Component } from 'react';

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '250px',
    position: 'relative',
    overflow: 'hidden',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '100%',
    height: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: 'rgb(57, 56, 100)',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'absolute',
    top: '30px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    paddingLeft: '40px',
    color: '#fff',
    pointerEvents: 'none',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
  },
  introBannerSubtitleStyles: {
    marginTop: '8px',
    marginBottom: '48px',
    maxWidth: '768px',
    fontSize: '16px',
    lineHeight: '25px',
  },
};

const imgIcons = [
  require('./images/theme-banner-1.png'),
  require('./images/theme-banner-2.png'),
  require('./images/theme-banner-3.png'),
  require('./images/theme-banner-4.png'),
  require('./images/theme-banner-5.jpg'),
];

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {themeConf} = this.props;
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src={imgIcons[themeConf.bannerId]}
          style={style.introBannerImgStyles}
          alt=""
        />
        <div
          className="intro-banner-img-mask"
          style={style.introBannerImgMaskStyles}
        />
        <div className="intro-banner-text" style={style.introBannerTextStyles}>
          <h2
            className="intro-banner-title"
            style={style.introBannerTitleStyles}
          >
            {themeConf.bannerTitle + themeConf.title}
          </h2>
          <p
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
            {/*{themeConf.bannerTitleSecond}*/}
          </p>

        </div>
      </div>
    );
  }
}
