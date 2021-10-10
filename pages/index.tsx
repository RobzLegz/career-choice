import Head from 'next/head'
import Navigation from "../src/components/navigation/Navigation";
import Footer from "../src/components/footer/Footer";
import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import {languageData} from "../src/redux/slices/languageSlice";

export default function Home() {
  const languageInfo = useSelector(languageData);
  const router = useRouter();

  return (
    <div className="page">
      <Head>
        <title>{languageInfo.text.home.head.title}</title>
      </Head>

      <Navigation />

      <div className="w-full flex items-center justify-center flex-col py-10 px-4 md:px-0">
        <h1>{languageInfo.text.home.header.heading}</h1>
        <h2>{languageInfo.text.home.header.subHeading}</h2>
      </div>

      <div className="w-full mt-5 md:mt-10 flex items-center justify-center flex-col-reverse md:flex-row px-4 md:px-0">
        <img 
          className="mt-5 md:mt-0 w-80"
          src="/svg/searching.svg" 
          alt="girl searching for something with a telescope" 
        />
        <div className="w-80 md:ml-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>{languageInfo.text.home.cards.card1.heading}</h3>
          <p>{languageInfo.text.home.cards.card1.text}</p>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-40 flex items-center justify-center flex-col md:flex-row px-4 md:px-0">
        <div className="w-80 md:mr-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>{languageInfo.text.home.cards.card2.heading}</h3>
          <p>{languageInfo.text.home.cards.card2.text}</p>
          <button className="mt-5" onClick={() => router.push("/find")}>{languageInfo.text.home.cards.card2.button}</button>
        </div>
        <img 
          className="mt-5 md:mt-0 w-80"
          src="/svg/filter.svg" 
          alt="options floating above some users, who are using filtering function" 
        />
      </div>

      <div className="mt-10 md:mt-40 w-full flex items-center justify-center px-4 md:px-0">
        <div className="bg-white p-5 rounded-md flex items-center justify-center flex-col">
          <h3>{languageInfo.text.home.cards.card3.heading}</h3>
          <img 
            src="/svg/survey.svg" 
            alt="a boy taking a survey" 
            className="w-80 my-5"
          />
          <button onClick={() => router.push("/find")}>{languageInfo.text.home.cards.card3.button}</button>
        </div>
      </div>

      <div className="w-full mt-10 md:mt-40 flex items-center justify-center flex-col-reverse md:flex-row px-4 md:px-0">
        <img 
          className="mt-5 md:mt-0 w-80"
          src="/svg/security.svg" 
          alt="security protecting users data" 
        />
        <div className="w-80 md:mr-10 bg-white p-5 rounded-md flex md:inline flex-col items-center">
          <h3>{languageInfo.text.home.cards.card4.heading}</h3>
          <p>{languageInfo.text.home.cards.card4.textPart1} <a href="https://github.com/RobzLegz/karjera-man" className="text__linking">{languageInfo.text.home.cards.card4.link}</a> {languageInfo.text.home.cards.card4.textPart2}</p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
