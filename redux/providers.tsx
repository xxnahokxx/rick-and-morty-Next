"use client"

import React, { Children } from 'react'
import { Provider } from 'react-redux'
import { store } from './store'

interface Props { children: React.ReactNode}

export const Providers = ({ children }: Props) => {
    return <Provider store={store} >
        {children}
    </Provider>
}

