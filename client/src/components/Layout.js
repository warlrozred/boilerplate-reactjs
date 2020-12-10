import React from 'react'

import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div>
            <nav>
                <Header />
                <Sidebar />
            </nav>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
