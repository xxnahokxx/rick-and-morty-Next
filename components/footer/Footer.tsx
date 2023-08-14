import ImageNext from 'next/image'
import React from 'react'
import rickAndMorty from '../../img/Rick y Morty.png'

const Footer = () => {
    return (
        <footer className='flex items-center justify-center py-1 bg-slate-600/50 '>
            <section className='container flex items-center justify-between'>
                <ImageNext src={rickAndMorty} alt="Rick y morty" className='w-[200px]' />
                <ul>
                    <li className='text-center'>Instagram</li>
                    <li className='text-center'>LinkedIn</li>
                    <li className='text-center'>GitHub</li>
                </ul>
                Copyright © 2023. All rights are reserved
            </section>
        </footer>
    )
}

export default Footer
