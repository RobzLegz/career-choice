import Head from 'next/head'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Navigation from './../src/components/navigation/Navigation';
import {login} from "../src/redux/slices/adminSlice"


//mans nedarbs
import {css } from'../src/styles/login'

export default function Find() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const correctUsername = process.env.USERNAME;
    const correctPassword = process.env.PASSWORD;

    const dispatch = useDispatch();

    const submitForm = (e: any) => {
        e.preventDefault();

        if(username === correctUsername && password === correctPassword){
            dispatch(login());
        }
    }

    return (
        <div className="bg-light-darker">
            <Head>
                <title>Karjera man | Login</title>
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
