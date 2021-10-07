import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getThemes } from './../src/logic/requests/themeOptions';
import { themeData } from './../src/redux/slices/themeSlice';
import Theme from './../src/components/themes/Theme';
import Navigation from './../src/components/navigation/Navigation';
import { levelData } from './../src/redux/slices/levelSlice';

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
        <title>Karjera man</title>
      </Head>

      <Navigation />

      <div className="w-full h-24 flex items-center justify-center flex-col">
        <h1 className="large_heading">Karjera man</h1>
        {stageInfo.level === 0 ? (
          <h2>Izvēlies lietas</h2>
        ) : stageInfo.level === 1 ? (
          <h2>Izvēlies citas lietas</h2>
        ) : (
          <h2>Izvēlies citas lietas</h2>
        )}
      </div>

      {themeInfo.themes && themeInfo.themes.map((theme: any, i: number) => {
        return (
          <Theme 
            key={i}
            data={theme}
          />
        )
      })}

    </div>
  )
}
