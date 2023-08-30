"use client"
import React, { useState } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Link from 'next/link';
import { usePathname } from "next/navigation"
import { UserButton, useAuth, useUser } from "@clerk/nextjs";


const NavbarSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean | undefined>(false);

    const pathname = usePathname()
    const { isLoaded: userLoaded, user} = useUser();
    const { isLoaded, userId, sessionId, getToken } = useAuth();

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
            name: "About",
            url: "/about",
        },
    ];
    return (


        <Navbar className='[&>header]:max-w-[100%] px-14' onMenuOpenChange={(isOpen: boolean | undefined) => setIsMenuOpen(isOpen)}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">R&M</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link color="foreground" href="/">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/characters" aria-current="page">
                        Characters
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" href="/episodes">
                        Episodes
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link color="foreground" href="/about">
                        About
                    </Link>
                </NavbarItem>
                {
                 userId && <NavbarItem isActive>
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
                    {userId && userLoaded && <h1>{firstName ?`${lastName} ${firstName}` : `${userName}`}</h1> }
                    <UserButton afterSignOutUrl="/" />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-full"
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}

export default NavbarSection
