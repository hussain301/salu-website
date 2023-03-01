import React from 'react'
import HeaderFlowbite from '../Header/HeaderFlowbite'
import Footer from '../Footer'

const Layout = (props) => {
    return (
        <> 
            <header>
                <HeaderFlowbite />
            </header>
            <main>{props.children}</main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Layout