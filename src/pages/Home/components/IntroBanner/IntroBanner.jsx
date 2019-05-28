import React, { Component } from 'react';

const style = {
  introBannerWrapStyles: {
    width: '100%',
    maxHeight: '450px',
    minHeight:'280px',
    position: 'relative',
    overflow: 'hidden',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '100%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  introBannerImgMaskStyles: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    background: 'rgba(0, 0, 0, 0.15)',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'absolute',
    top: '50px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    pointerEvents: 'none',
  },
  organizationBannerTextStyles: {
    position: 'absolute',
    top: '150px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    textAlign:'center',
    color: '#fff',
    pointerEvents: 'none',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '40px',
    textAlign:'center',
  },
  introBannerSubtitleStyles: {
    fontSize: '26px',
    lineHeight: '28px',
    margin:'20px auto',
    maxWidth:'1000px',
    minWidth:'1000px',
    textAlign:'center',
  },
};

export default class IntroBanner extends Component {
  static displayName = 'IntroBanner';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="intro-banner-wrap" style={style.introBannerWrapStyles}>
        <img
          className="intro-banner-img"
          src={require('./images/main-banner.png')}
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
            遥感图像稀疏表征与智能分析竞赛
          </h2>
          <p
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
            2019年6月15日 ~ 9月19日
          </p>

        </div>
        <div className="intro-banner-text" style={style.organizationBannerTextStyles}>
          <div
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
          </div>

        </div>
      </div>
    );
  }
}

const styleTable = {
  sOverview: {
    marginTop: '20px',
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
    color: 'rgb(233, 233, 233)',
  },
  textLeft: {
    textAlign: 'left',
    color: 'rgb(233, 233, 233)',

  },
  textJustify: {
    textAlign: 'justify',
    textJustify: 'distribute-all-lines',
    textAlignLast: 'justify',
  },
  logoImg:{
    width:'30px',
    display: 'inline',
    verticalAlign:'middle',
    marginRight:'5px'
  },
  logoImgSmall:{
    width:'33px',
    display: 'inline',
    verticalAlign:'middle',
    marginRight:'5px'
  }
}
