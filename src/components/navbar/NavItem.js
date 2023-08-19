import React from 'react'

export default function NavItem(props) {
  return (
    <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">{props.navName}</a>
           
        </li>
  )
}
