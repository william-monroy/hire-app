import React from 'react'
import Content from '../../components/Content'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from '../../styles/Messages.module.css'

const Messages = () => {
  return (
    <div className={styles.Messages}>
      <Navbar />
      <Sidebar current={2}/>
      <Content>
      Messages
      </Content>
    </div>
  )
}

export default Messages