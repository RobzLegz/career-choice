import Head from 'next/head'
import Navigation from './../src/components/navigation/Navigation';
import FindHeadingContainer from "../src/components/containers/findHeadingContainer/FindHeadingContainer";
import DisplayData from "../src/hooks/DisplayData";
import { useSelector } from 'react-redux';
import {levelData} from "../src/redux/slices/levelSlice";
import {categories} from "../src/data/proffessions";
import StageButtonContainer from "../src/components/containers/buttonContainer/StageButtonContainer";

export default function Find() {
  const stageInfo = useSelector(levelData);

  return (
    <div className="bg-light-darker flex flex-col items-center">
      <Head>
        <title>Karjera man | Aptauja</title>
      </Head>

      <Navigation />

      <FindHeadingContainer />

      <DisplayData 
        stage={stageInfo.stage}
        data={categories.filter(t => t.stage === stageInfo.stage)}
      />

      <StageButtonContainer />
    </div>
  )
}