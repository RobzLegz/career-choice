import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getThemes } from './../src/logic/requests/themeOptions';
import { themeData } from './../src/redux/slices/themeSlice';
import Theme from './../src/components/themes/Theme';
import Navigation from './../src/components/navigation/Navigation';
import { levelData } from './../src/redux/slices/levelSlice';
import renderStage from './../src/hooks/renderStage';

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

      {(renderStage(stageInfo.level))}
    </div>
  )
}