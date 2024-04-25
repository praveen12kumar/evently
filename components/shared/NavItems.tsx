"use client"
import React from 'react'
import { headerLinks } from '@/constants/index';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavItems = () => {
    const pathname = usePathname();

  return (
    <ul className='flex flex-col gap-6 w-full items-start md:flex-row'>
       {
        headerLinks.map((link, index)=>{
            const isActive = pathname === link.route;

            return(
                <li key={link.route} className={`${
              isActive && 'text-primary-500'
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
            )
        })
       }
    </ul>
  )
}

export default NavItems