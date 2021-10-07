import Head from 'next/head'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getThemes } from './../src/logic/requests/themeOptions';
import { themeData } from './../src/redux/slices/themeSlice';
import Theme from './../src/components/themes/Theme';

export default function Home() {
  const themeInfo = useSelector(themeData);

  const dispatch = useDispatch();

  useEffect(() => {
    if(!themeInfo.themes){
      getThemes(dispatch);
    }
  }, [dispatch, themeInfo.themes]);

  return (
    <div>
      <Head>
        <title>Karjera man</title>
      </Head>

      <div className="w-full h-24 flex items-center justify-center">
        <h1 className="large_heading">Karjera man</h1>
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
