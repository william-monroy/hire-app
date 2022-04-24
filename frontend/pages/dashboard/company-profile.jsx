import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/CompanyProfile.module.css'

const CompanyProfile = () => {
  return (
    <div className={styles.CompanyProfile}>
      <Navbar />
      <Sidebar current={3}/>
      <Content>
        
      </Content>
    </div>
  )
}

export default CompanyProfile