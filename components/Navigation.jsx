import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/assets/logo.png'
import Link from 'next/link'
import { FaGithub, FaRegWindowClose } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import Button from './Button';

const Navigation = () => {

    const [isOpen, seIsOpen] = useState(false)
    const handleClick = () => {
        seIsOpen(!isOpen)
    }

    const menuItems = [
        { name: 'home', link: '/' },
        { name: 'about', link: '/' },
        { name: 'portfolio', link: '/' },
        { name: 'blog', link: '/' },
        { name: 'contact', link: '/' },
    ]
    return (
        <nav className='shadow-md w-full fixed top-0 left-0'>
            <div className='md:flex py-4 md:px-10 px-7 md:justify-between'>
                <div className='md:flex md:items-center'>
                    <Link href="/">
                        <Image src={logo} alt="logo" width={100} height={100} />
                    </Link>
                    <ul className={`md:flex md:items-center md:ml-12 text-gray-500 bg-white md:pb-0 capitalize md:static absolute w-full transition-all duration-500 ${isOpen ? 'top-16' : 'top-[-450px]'}`}>
                        {menuItems.map(item => (
                            <li key={item.name} className='text-lg text-center font-semibold border-b-2 border-transparent hover:border-gray-500 transition-all duration-500 ease-in md:my-0 m-3 hover:text-gray-800'><Link href={item.link}>{item.name}</Link></li>
                        ))}
                        <p className='md:hidden text-center '><Button>Hire Me</Button></p>
                    </ul>
                </div>
                <div className='md:flex md:mx-0 mx-auto md:items-center md:gap-4 ml-4'>
                    <Link href='/' className='text-3xl md:block hidden rounded-full'><FaGithub /></Link>
                    <span className='md:block hidden'><Button>Hire Me</Button></span>
                    <div className='md:hidden cursor-pointer text-3xl absolute right-8 top-4' onClick={handleClick}>
                        {isOpen ? <FaRegWindowClose /> : <BiMenu />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation