import Head from 'next/head'
import Navigation from './../src/components/navigation/Navigation';
import Stage from '../src/components/stages/Stage';

export default function Find() {
  return (
    <div className="bg-light-darker">
      <Head>
        <title>Karjera man | Aptauja</title>
      </Head>

      <Navigation />

      <Stage />
    </div>
  )
}