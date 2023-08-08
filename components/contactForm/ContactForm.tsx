"use client"
import { log } from 'console'
import React, { useState } from 'react'


type Info = {
    name: string
    email: string
    message: string
}


const ContactForm = () => {

    const [info, setInfo] = useState<Info>({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> ) => {
        const { name, value } = event.target
        setInfo({ ...info, [name]: value })

    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(info);

        const res = await fetch("api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info)
        })

        const { msg } = await res.json()

        console.log(msg);


    }


    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col items-start ps-5 pt-5'>

                <label htmlFor="fullName">Full name</label>
                <input name='name' className='border border-slate-200 py-2 px-4 rounded-md drop-shadow-md' id="fullName" type="text" placeholder='Pepe' onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input name='email' className='border border-slate-200 py-2 px-4 rounded-md drop-shadow-md' id="email" type="text" placeholder='pepe@correo.com'  onChange={handleChange}/>
                <label htmlFor="message">Your message</label>
                <textarea name='message' className='border border-slate-200 py-2 px-4 rounded-md drop-shadow-md' id="message" cols={30} rows={10} placeholder='insert your message...' onChange={handleChange}></textarea>

                <button className="border py-2 px-5 m-2 rounded-lg bg-lime-600 text-white font-bold hover:bg-lime-800 transition-colors duration-300" type='submit'>Send</button>

            </form>

            <div>
                <div>Error message</div>
            </div>
        </>
    )
}

export default ContactForm
