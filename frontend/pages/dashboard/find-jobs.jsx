import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/FindJobs.module.css'

const FindJobs = () => {
  return (
    <div className={styles.FindJobs}>
      <Navbar />
      <Sidebar current={9}/>
      <Content>
      FindJobs
      </Content>
    </div>
  )
}

export default FindJobs