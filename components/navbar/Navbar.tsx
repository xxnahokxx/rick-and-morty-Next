"use client"
import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import Image from 'next/image';
import ram1 from "@/img/RaM1.png"
import ram2 from "@/img/RaM2.png"


const NavbarSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);
    const pathname = usePathname()
    const { isLoaded: userLoaded, user } = useUser();
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    const activeLink =
        "border-b-2  border-[#94ef13] text-[#94ef13] duration-200 cursor-pointer font-semibold"
    const inactiveLink =
        "border-b-2  border-[#94ef13] font-semibold border-opacity-0 hover:border-opacity-100 hover:text-[#94ef13] duration-200 cursor-pointer"

    const info = user

    const firstName = info?.externalAccounts[0]?.firstName ?? ""
    const lastName = info?.externalAccounts[0]?.lastName ?? ""
    const userName = info?.username

    const menuItems = [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "Characters",
            url: "/characters",
        },
        {
            name: "Episodes",
            url: "/episode",
        },
        {
            name: "Favorites",
            url: "/favorites",
        },
        {
            name: "About",
            url: "/about",
        },
    ];
    return (


        <Navbar className='[&>header]:max-w-[100%] md:px-14' onMenuOpenChange={(isOpen: boolean | undefined) => setIsMenuOpen(isOpen)}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand className='[&>a]:relative'>
                    <Link href={"/"} title='Rick And Morty'>
                        <Image className='w-20' src={ram1} alt='logo'></Image>
                        <Image className='w-20 absolute top-0 opacity-0 hover:opacity-100 transition duration-500' src={ram2} alt='logo'></Image>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem className={pathname === "/" ? activeLink : inactiveLink}>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem className={pathname === "/characters" ? activeLink : inactiveLink}>
                    <Link href="/characters" aria-current="page">
                        Characters
                    </Link>
                </NavbarItem>
                <NavbarItem className={pathname === "/episodes" ? activeLink : inactiveLink}>
                    <Link color="foreground" href="/episodes">
                        Episodes
                    </Link>
                </NavbarItem>
                <NavbarItem className={pathname === "/about" ? activeLink : inactiveLink}>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
                {
                    userId && <NavbarItem className={pathname === "/favorites" ? activeLink : inactiveLink}>
                        <Link color="foreground" href="/favorites">
                            Favorites
                        </Link>
                    </NavbarItem>
                }
            </NavbarContent>
            <NavbarContent justify="end">

                {!userId && <>
                    <NavbarItem className="hidden lg:flex">
                        <Link href="/sign-up">Sign up</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link href="/sign-in" className=" text-lime-600 px-3 py-1 border border-lime-600 rounded font-semibold" >Sign In</Link>
                    </NavbarItem>
                </>
                }

                <NavbarItem className='flex gap-3 items-center'>
                    {userId && userLoaded && <h1>{firstName ? `${lastName} ${firstName}` : `${userName}`}</h1>}
                    <UserButton afterSignOutUrl="/" />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (

                    (!userId && item.name === "Favorites" ? <></> : <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>)
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default NavbarSection
