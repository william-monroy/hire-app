import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Applicants.module.css'

const Applicants = () => {
  return (
    <div className={styles.Applicants}>
      <Navbar />
      <Sidebar current={4}/>
      <Content>
        
      </Content>
    </div>
  )
}

export default Applicants