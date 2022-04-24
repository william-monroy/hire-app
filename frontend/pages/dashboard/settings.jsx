import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Settings.module.css'

const Settings = () => {
  return (
    <div className={styles.Settings}>
      <Navbar />
      <Sidebar current={6}/>
      <Content>
        
      </Content>
    </div>
  )
}

export default Settings