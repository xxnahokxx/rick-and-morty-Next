import ImageNext from 'next/image'
import React from 'react'
import rickAndMorty from '../../img/Rick y Morty.png'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center py-1 pb-5 bg-slate-600/50 '>
            <section className='container flex flex-col md:flex-row items-center  justify-between'>
                <div className='flex items-center justify-between md:w-[55%] '>
                    <ImageNext src={rickAndMorty} alt="Rick y morty" className='w-[200px]' />
                    <ul>
                        <Link href={"https://www.linkedin.com/in/johan-s-amaya/"} target='blank'>
                            <li className='text-center hover:text-lime-600 hover:font-semibold'>LinkedIn</li>
                        </Link>
                        <Link href={"https://github.com/xxnahokxx"} target='blank'>
                            <li className='text-center hover:text-lime-600 hover:font-semibold'>GitHub</li>
                        </Link>
                        <Link href={"https://www.instagram.com/xnahokx/"} target='blank'>
                            <li className='text-center hover:text-lime-600 hover:font-semibold'>Instagram</li>
                        </Link>
                    </ul>
                </div>
                <span>
                    Copyright © 2023. All rights are reserved
                </span>
            </section>
        </footer>
    )
}

export default Footer
