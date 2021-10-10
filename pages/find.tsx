import Head from 'next/head'
import Navigation from './../src/components/navigation/Navigation';
import FindHeadingContainer from "../src/components/containers/findHeadingContainer/FindHeadingContainer";
import StageButtonContainer from "../src/components/containers/buttonContainer/StageButtonContainer";
import RenderCategories from "../src/hooks/RenderCategories";

export default function Find() {
  return (
    <div className="bg-light-darker flex flex-col items-center">
      <Head>
        <title>Karjera man | Aptauja</title>
      </Head>

      <Navigation />

      <FindHeadingContainer />

      <RenderCategories />

      <StageButtonContainer />
    </div>
  )
}