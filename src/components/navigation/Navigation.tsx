import React from 'react'
import Link from 'next/link'

function Navigation() {
    return (
        <nav>
            <Link href="/">
                <h2 className="cursor-pointer">Karjera man</h2>
            </Link>
            <ul className="flex w-40 items-center justify-between">
                <li className="nav__link"><Link href="/">Sākums</Link></li>
                <li className="nav__link"><Link href="/find">Aptauja</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
