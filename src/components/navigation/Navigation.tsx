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
                <li className="ml-5 flex items-center h-full">
                    {!languageChangerActive ? (
                        <div className="w-16 h-5" onClick={() => setLanguageChangerActive(true)}>
                            {
                                supportedLanguages.map((l) => {
                                    if(languageInfo.lang === l.short){
                                        return (
                                            <div className="w-full h-full flex items-center justify-between">
                                                <img className="w-10 h-full" src={l.flag} alt={`${l.language} flag`} />
                                                <p className="ml-1">{l.short}</p>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    ) : (
                        <>
                            {
                                supportedLanguages.map((language) => (
                                    <div className="h-5 flex ml-3 items-center">
                                        <img className="w-10 h-full" src={language.flag} alt={`${language.language} flag`} />
                                        <p className="ml-1">{language.short}</p>
                                    </div>
                                ))
                            }
                        </>
                    )}
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
