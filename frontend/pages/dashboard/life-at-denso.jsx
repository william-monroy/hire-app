import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/LifeAtDenso.module.css'

const LifeAtDenso = () => {
  return (
    <div className={styles.LifeAtDenso}>
      <Navbar />
      <Sidebar current={10}/>
      <Content>
      LifeAtDenso
      </Content>
    </div>
  )
}

export default LifeAtDenso