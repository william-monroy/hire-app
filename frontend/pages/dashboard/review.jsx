import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Review.module.css'

const Review = () => {
  return (
    <div className={styles.Review}>
      <Navbar />
      <Sidebar current={5}/>
      <Content>
        
      </Content>
    </div>
  )
}

export default Review