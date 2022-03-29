import { Layout } from 'antd';
import React from 'react'
import './videos.css'

const { Content } = Layout;

const Videos = () => {
  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      Videos
    </Content>
  )
}

export default Videos