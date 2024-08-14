import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'

import ztellerLogo from './Ztellalogo.png';

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400">
      {/* <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="/app"> */}
      <a className="ml-6 flex items-center justify-center" href="/app">
      <img src={ztellerLogo} alt="Zteller Logo" className="h-10 w-auto" />
      </a>
      {/*</a>*/}
      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative px-6 py-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                activeClassName="text-gray-800 dark:text-gray-100"
              >
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-green-400 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <Button 
         style={{
        backgroundColor:'#41aa5e'
        }}
        tag="a" href="contact" className="bg-green-400">
          Contact Us
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
      <div style={{
        position:"fixed",
        display:"flex",
        justifyContent:"center",
       bottom:"0",
       marginLeft:"30px",
       textAlign:"center"
        }}>
        <p 
        style={{
          
          marginRight:"-22px"
          }}
          >Powered by</p>
      <a className="ml-6 flex items-center justify-center" href="/app">
      <img 
      style={{
        maxHeight:"20px",
        
        }}
      src={ztellerLogo} alt="Zteller Logo" className="h-10 w-auto" />
      </a>
      </div>
    </div>
  )
}

export default SidebarContent
