import Head from 'next/head'
import { useSelector } from 'react-redux';
import Navigation from './../src/components/navigation/Navigation';
import { levelData } from './../src/redux/slices/levelSlice';
import RenderStage from '../src/hooks/RenderStage';

export default function Find() {
  const stageInfo = useSelector(levelData);

  return (
    <div className="bg-light-darker">
      <Head>
        <title>Karjera man | Aptauja</title>
      </Head>

      <Navigation />

      {(<RenderStage stage={stageInfo.level}/>)}
    </div>
  )
}