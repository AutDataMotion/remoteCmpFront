import React, { Component } from 'react';

const style = {
  introBannerWrapStyles: {
    width: '100%',
    height: '450px',
    position: 'relative',
    overflow: 'hidden',
  },
  introBannerImgStyles: {
    position: 'absolute',
    top: '0',
    left: '50%',
    display: 'block',
    width: '1920px',
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
    background: '#000',
    opacity: '.45',
    zIndex: '15',
  },
  introBannerTextStyles: {
    position: 'absolute',
    top: '112px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    color: '#fff',
    pointerEvents: 'none',
  },
  organizationBannerTextStyles: {
    position: 'absolute',
    top: '250px',
    zIndex: '15',
    width: '100%',
    boxSizing: 'border-box',
    textAlign:'center',
    color: '#fff',
    pointerEvents: 'none',
  },
  introBannerTitleStyles: {
    fontWeight: '400',
    fontSize: '50px',
    lineHeight: '70px',
    textAlign:'center',
  },
  introBannerSubtitleStyles: {
    fontSize: '16px',
    lineHeight: '25px',
    margin:'0 auto',
    maxWidth:'1000px',
    minWidth:'900px',
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
          src={require('./images/home-banner.png')}
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
            2019-遥感图像【稀疏表征与智能分析】竞赛
          </h2>
          <p
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
          </p>

        </div>
        <div className="intro-banner-text" style={style.organizationBannerTextStyles}>
          <div
            className="intro-banner-subtitle"
            style={style.introBannerSubtitleStyles}
          >
            <table className="org">
              <thead>
              <tr>
                <th style={styleTable.textCenter} width="100px"></th>
                <th style={styleTable.textCenter} width="300px"></th>
                <th style={styleTable.textCenter} width="100px"></th>
                <th style={styleTable.textCenter} width="300px"></th>
                <th style={styleTable.textCenter} width="100px"></th>
                <th style={styleTable.textCenter} width="300px"></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td valign="top" style={styleTable.textRight}>主办单位
                </td>
                <td style={styleTable.textLeft}>
                  国家自然科学基金委信息科学部 <br/>
                  空间信息网络重大研究计划指导专家组
                </td>

                <td valign="top" style={styleTable.textRight}>承办单位</td>
                <td style={styleTable.textLeft}>
                  武汉大学测绘遥感信息工程国家重点实验室<br/>
                  中国科学院空间应用工程与技术中心
                </td>

                <td valign="top" style={styleTable.textRight}> 赞助单位<br/></td>
                <td style={styleTable.textLeft}>华为技术有限公司</td>
              </tr>
              </tbody>
            </table>
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
  },
  textLeft: {
    textAlign: 'left',
  },
  textJustify: {
    textAlign: 'justify',
    textJustify: 'distribute-all-lines',
    textAlignLast: 'justify',
  },
}
