import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getThemes } from './../src/logic/requests/themeOptions';
import { themeData } from './../src/redux/slices/themeSlice';
import Theme from './../src/components/themes/Theme';
import Navigation from './../src/components/navigation/Navigation';
import { levelData } from './../src/redux/slices/levelSlice';
import Stage1 from './../src/components/stages/Stage1';
import Stage2 from './../src/components/stages/Stage2';
import Stage3 from './../src/components/stages/Stage3';
import Stage4 from './../src/components/stages/Stage4';
import Stage5 from './../src/components/stages/Stage5';

export default function Find() {
  const themeInfo = useSelector(themeData);
  const stageInfo = useSelector(levelData);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!themeInfo.themes){
      getThemes(dispatch);
    }
  }, [dispatch, themeInfo.themes]);

  return (
    <div className="bg-light-darker">
      <Head>
        <title>Karjera man | Aptauja</title>
      </Head>

      <Navigation />

      {stageInfo.level === 1 ? (
        <Stage1 />
      ) : stageInfo.level === 2 ? (
        <Stage2 />
      ) : stageInfo.level === 3 ? (
        <Stage3 />
      ) : stageInfo.level === 4 ? (
        <Stage4 />
      ) : stageInfo.level === 5 ? (
        <Stage5 />
      ) : (
        null
      )}
    </div>
  )
}
