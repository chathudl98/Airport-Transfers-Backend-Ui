"use client"
import React, { useState } from 'react'
import { Nav } from './ui/nav'
import {
  LayoutDashboard,
  ShoppingCart,
  UsersRound,
  Settings,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { Button } from './ui/button'
import { useWindowWidth } from '@react-hook/window-size'

export default function SideNavbar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toggleSidebar() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24'>

      {!mobileWidth && (
        <div className='absolute right-[-20px] top-7'>
          <Button 
            onClick={toggleSidebar} 
            variant='secondary' 
            className='rounded-full p-2'
          >
            <ChevronRight />
          </Button>
        </div>
      )}

      <Nav
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Dashboard",
            href: "/",
            icon: LayoutDashboard,
            variant: "default",
          },
          {
            title: "Users",
            href: "/Users",
            icon: UsersRound,
            variant: "ghost",
          },
          {
            title: "Orders",
            href: "/Orders",
            icon: ShoppingCart,
            variant: "ghost",
          },
          {
            title: "Settings",
            href: "/Settings",
            icon: Settings,
            variant: "ghost",
          },
          {
            title: "Log Out",
            href: "/Login",
            icon: LogOut,
            variant: "ghost",
          },
        ]}
      />
    </div>
  )
}
