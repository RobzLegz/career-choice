import Head from 'next/head'
import Navigation from './../src/components/navigation/Navigation';
import FindHeadingContainer from "../src/components/containers/findHeadingContainer/FindHeadingContainer";
import StageButtonContainer from "../src/components/containers/buttonContainer/StageButtonContainer";
import RenderCategories from "../src/hooks/RenderCategories";
import { useSelector } from 'react-redux';
import { languageData } from '../src/redux/slices/languageSlice';

export default function Find() {
  const languageInfo = useSelector(languageData);

  return (
    <div className="page flex flex-col items-center">
      <Head>
        <title>{languageInfo.text.find.head.title}</title>
      </Head>

      <Navigation />

      <FindHeadingContainer />

      <RenderCategories />

      <StageButtonContainer />
    </div>
  )
}