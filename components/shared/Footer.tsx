import React from 'react'
import Link from 'next/link'
import Image from 'next/image'



const Footer = () => {
  return (
    <footer className='border-t'>
      <div className="flex flex-center wrapper flex-between flex-col gap-4 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" alt='logo' 
            width={128}
            height={38}
          />
        </Link>
        <p>2024 Evently. All Rights reverved</p>
      </div>
    </footer>
  )
}

export default Footer