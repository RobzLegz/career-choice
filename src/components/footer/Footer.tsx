import React from 'react'
import { useSelector } from 'react-redux';
import { languageData } from '../../redux/slices/languageSlice';

function Footer() {
    const languageInfo = useSelector(languageData);

    return (
        <footer className="mt-10 md:mt-40">
            <h1 className="text-large md:text-heading">Karjera man</h1>
            <div>
                <h4>{languageInfo.text.global.footer.pages.heading}</h4>
                <ul>
                    <li>{languageInfo.text.global.footer.pages.option1}</li>
                    <li>{languageInfo.text.global.footer.pages.option2}</li>
                </ul>
            </div>
            <div className="hidden sm:visible">
                <h4>{languageInfo.text.global.footer.media.heading}</h4>
                <ul>
                    <li>Instagram</li>
                    <li>github</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
