import { Button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'
import Content from '../../../../../components/Content'
import Navbar from '../../../../../components/Navbar'
import Sidebar from '../../../../../components/Sidebar'
import styles from '../../../../../styles/ApplicationID.module.css'

const Application = ({id}) => {
  return (
    <div className={styles.Application}>
      <Navbar />
      <Sidebar current={7} />
      <Content>
        Application: {id}
        <Link href="/dashboard/my-applications/application/1/test">
          <Button>Hacer test</Button>
        </Link>
      </Content>
    </div>
  )
}

Application.getInitialProps = async ({query}) => {
  return {id: query.id}
}

export default Application