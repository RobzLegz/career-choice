import React from 'react'
import { useSelector } from 'react-redux';
import { languageData } from '../../redux/slices/languageSlice';
import Link from "next/link";
import { useRouter } from 'next/dist/client/router';

function Footer() {
    const router = useRouter();
    const languageInfo = useSelector(languageData);

    return (
        <footer className="mt-10 md:mt-40">
            <h1 onClick={() => router.push("/")} className="text-large md:text-heading">Karjera man</h1>
            <div>
                <h4>{languageInfo.text.global.footer.pages.heading}</h4>
                <ul>
                    <li><Link href="/">{languageInfo.text.global.footer.pages.option1}</Link></li>
                    <li><Link href="/find">{languageInfo.text.global.footer.pages.option2}</Link></li>
                </ul>
            </div>
            <div className="hidden sm:flex sm:flex-col">
                <h4>{languageInfo.text.global.footer.media.heading}</h4>
                <ul>
                    {/* <li><a href="https://github.com/RobzLegz/karjera-man">Instagram</a></li> */}
                    <li><a href="https://github.com/RobzLegz/karjera-man">github</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
