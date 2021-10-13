import React, { useState } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage, languageData } from '../../redux/slices/languageSlice';
import { supportedLanguages } from '../../data/languages';

function Navigation() {
    const dispatch = useDispatch();
    const languageInfo = useSelector(languageData);
    const [languageChangerActive, setLanguageChangerActive] = useState(false);
 
    const changeLang = (lang: string) => {
        dispatch(changeLanguage(lang));
        setLanguageChangerActive(false);
    }

    return (
        <nav>
            <Link href="/">
                <h2 className="cursor-pointer">Karjera man</h2>
            </Link>
            <ul className="nav__links">
                <li className="nav__link"><Link href="/">{languageInfo.text.global.navigation.links.link1}</Link></li>
                <li className="nav__link"><Link href="/find">{languageInfo.text.global.navigation.links.link2}</Link></li>
            </ul>
            <div className="ml-5 flex items-center h-full pt-1 mt-4 md:mt-0">
                {!languageChangerActive ? (
                    <div className="w-16 h-5" onClick={() => setLanguageChangerActive(true)}>
                        {
                            supportedLanguages.map((l, i: number) => {
                                if(languageInfo.lang === l.short){
                                    return (
                                        <div key={i} className="w-full h-full flex items-center justify-between cursor-pointer">
                                            <img className="w-10 h-full" src={l.flag} alt={`${l.language} flag`} />
                                            <p className="ml-1">{l.short}</p>
                                        </div>
                                    )
                                }
                                return null;
                            })
                        }
                    </div>
                ) : (
                    <>
                        {
                            supportedLanguages.map((language, i: number) => (
                                <div key={i} className="h-5 flex ml-3 items-center cursor-pointer" onClick={() => changeLang(language.short)}>
                                    <img className="w-10 h-full" src={language.flag} alt={`${language.language} flag`} />
                                    <p className="ml-1">{language.short}</p>
                                </div>
                            ))
                        }
                    </>
                )}
                
            </div>
        </nav>
    )
}

export default Navigation
