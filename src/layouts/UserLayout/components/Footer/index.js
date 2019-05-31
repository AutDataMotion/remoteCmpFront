import React from 'react';

export default () => {
  return (
    <div style={styles.footer}>
      <div style={styles.links}>
      </div>
      <div style={styles.copyright}>版权所有 © 中国科学院空间应用工程与技术中心 <span>   备案号：京ICP备09082226号-7</span></div>
    </div>
  );
};

const styles = {
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '20px',
  },
  links: {
    marginBottom: '8px',
  },
  link: {
    fontSize: '13px',
    marginRight: '40px',
    color: '#fff',
  },
  copyright: {
    fontSize: '13px',
    color: '#fff',
    lineHeight: 1.5,
    textAlign: 'right',
  },
};
