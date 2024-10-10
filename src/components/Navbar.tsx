import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='hidden lg:block'>
        <div className='container'>
            <div className='flex w-fit gap-10 mx-auto font-medium py-4 text-blackish'>


         {/* link */}
         
         <Link href='/'
         className='navbar_link relative'>HOME
         </Link>
         <Link href='/'
         className='navbar_link relative'>CATEGORY
         </Link>
         <Link href='/'
         className='navbar_link relative'>MEN
         </Link>
         <Link href='/'
         className='navbar_link relative'>WOMEN
         </Link>
         <Link href='/'
         className='navbar_link relative'>JEWELRY
         </Link>
         <Link href='/'
         className='navbar_link relative'>PERFUME
         </Link>
         <Link href='/'
         className='navbar_link relative'>BLOG
         </Link>
         <Link href='/'
         className='navbar_link relative'>HOT OFFERS
         </Link>
            </div>
        </div>

    </div>

  )
}

export default Navbar