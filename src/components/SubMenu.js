import React from 'react'
import Menu from './Menu'

import Chat from '../routes/Chat'
import Camera from '../routes/Camera'
import Stories from '../routes/Stories'

const SubMenu = () => (
  <Menu
    routes={[
      { component: Chat},
      { component: Camera},
      { component: Stories},
    ]}
    initialIndex={1}
   />
)

export default SubMenu
