import React, { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux';
import { languageData } from '../../redux/slices/languageSlice';
import { supportedLanguages } from '../../data/languages';

function Navigation() {
    const languageInfo = useSelector(languageData);
    const [languageChangerActive, setLanguageChangerActive] = useState(false);

    return (
        <nav>
            <Link href="/">
                <h2 className="cursor-pointer">Karjera man</h2>
            </Link>
            <ul className="nav__links">
                <li className="nav__link"><Link href="/">{languageInfo.text.global.navigation.links.link1}</Link></li>
                <li className="nav__link"><Link href="/find">{languageInfo.text.global.navigation.links.link2}</Link></li>
                <li className="language__changer">
                    {
                        supportedLanguages.map((language) => (
                            <div className="language__container">
                                <img src={language.flag} alt={`${language.language} flag`} />
                                <p>{language.short}</p>
                            </div>
                        ))
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
