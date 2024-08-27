import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Header = () => {
  return (
    <div>
      <div>
        <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Library</Breadcrumb.Item>
            <Breadcrumb.Item>Data</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}

export default Header