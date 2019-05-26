import React from 'react';

const LoginIntro = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.title}>遥感图像【稀疏表征与智能分析】竞赛</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  content: {
    width: '600px',
    marginLeft: '100px',
    color: '#fff',
  },
  title: {
    marginBottom: '20px',
    fontWeight: '600',
    fontSize: '36px',
    lineHeight: '1.5',
    whiteSpace:'pre'
  },
  description: {
    margin: '0',
    fontSize: '16px',
    color: '#fff',
    letterSpacing: '0.45px',
    lineHeight: '40px',
  },
};

export default LoginIntro;
