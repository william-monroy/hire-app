import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Posts.module.css'

const Posts = () => {
  return (
    <div className={styles.Posts}>
      <Navbar />
      <Sidebar current={1}/>
      <Content>
        
      </Content>
    </div>
  )
}

export default Posts