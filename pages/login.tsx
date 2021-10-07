import Head from 'next/head'
import { useState } from 'react';
import Navigation from './../src/components/navigation/Navigation';

export default function Find() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const correctUsername = process.env.USERNAME;
    const correctPassword = process.env.PASSWORD;

    const submitForm = (e: any) => {
        if(username === correctUsername && password === correctPassword){
            
        }
    }

    return (
        <div className="bg-light-darker">
            <Head>
                <title>Karjera man | Aptauja</title>
            </Head>

            <Navigation />

            <form>
                <label htmlFor="username"></label>
                <input name="username" type="text" value={username} onChange={(e: any) => setUsername(e.target.value)} placeholder="username" />
                <label htmlFor="password"></label>
                <input name="password" type="text" value={password} onChange={(e: any) => setPassword(e.target.value)} placeholder="password" />
                <button onClick={(e: any) => submitForm(e)}>Login</button>
            </form>
        </div>
    )
}
