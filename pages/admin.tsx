import Head from 'next/head'
import Navigation from './../src/components/navigation/Navigation';

export default function Find() {
    return (
        <div className="bg-light-darker">
            <Head>
                <title>Karjera man | Admin</title>
            </Head>

            <Navigation />
        </div>
    )
}
