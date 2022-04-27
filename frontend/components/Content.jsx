import React from 'react'
import styles from './Content.module.css'

const Content = ({children}) => {
  return (
    <div className={styles.Content}>
      {children}
    </div>
  )
}

export default Content