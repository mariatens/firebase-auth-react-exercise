import axios from "axios";
import React, { useState } from "react";
import {auth} from "./configureFirebase";
import {googleAuthProvider} from './configureFirebase'
import {signInWithPopup} from 'firebase/auth'

export function AuthDemoStart(): JSX.Element {
    const [lastAPIReply, setLastAPIReply] = useState<string>("");
    const [user, setUser] = useState()

    async function handleFetchTimeClicked() {
        const reply = await axios.get("http://localhost:4000/");
        setLastAPIReply(reply.data);
    }

    async function handleFetchWisdomClicked() {
        //This SHOULD be hard to get, eventually.
        const reply = await axios.get("http://localhost:4000/wisdom");
        setLastAPIReply(reply.data);
    }
    // const user = //? how to paste the user object 

    return (
        <div>
            <pre>{JSON.stringify(auth)}</pre>
            <h2>Auth Demo</h2>

            <button onClick={async ()=> {await signInWithPopup(auth, googleAuthProvider).then((result)=> console.log(result))}}>Sign in</button>
            <button onClick={() => {auth.signOut()}}>Sign out</button>
            //TODO: ; setUser() in both sign in and out 
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <hr />
            <h3>Talk to the API</h3>
            <button onClick={handleFetchTimeClicked}>Fetch Time</button>
            <button onClick={handleFetchWisdomClicked}>Fetch Ancient Wisdom!</button>
            <h4>Last successful reply from API</h4>
            <div>{lastAPIReply}</div>
            <br />
            <i>(also check console for any failures)</i>

            <hr />

        </div>
    );
}

