import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/MyResume.module.css'

const MyResume = () => {
  return (
    <div className={styles.MyResume}>
      <Navbar />
      <Sidebar current={8}/>
      <Content>
      MyResume
      </Content>
    </div>
  )
}

export default MyResume