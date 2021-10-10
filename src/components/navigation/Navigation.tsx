import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { languageData } from '../../redux/slices/languageSlice';

function Navigation() {
    const languageInfo = useSelector(languageData);

    return (
        <nav>
            <Link href="/">
                <h2 className="cursor-pointer">Karjera man</h2>
            </Link>
            <ul className="nav__links">
                <li className="nav__link"><Link href="/">{languageInfo.text.global.navigation.links.link1}</Link></li>
                <li className="nav__link"><Link href="/find">{languageInfo.text.global.navigation.links.link2}</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation
