import axios from "axios";
import React, { useState } from "react";
import {auth} from "./configureFirebase";
import {googleAuthProvider} from './configureFirebase'
import {signInWithPopup, User} from 'firebase/auth'

export function AuthDemoStart(): JSX.Element {
    const [lastAPIReply, setLastAPIReply] = useState<string>("");
    const [user, setUser] = useState<User|null>()

    async function handleFetchTimeClicked() {
        const reply = await axios.get("http://localhost:4000/");
        setLastAPIReply(reply.data);
    }

    async function handleFetchWisdomClicked() {
        if (!user){return}
        const idToken = await user?.getIdToken()
        const config = {headers: {"Authorization": "Bearer" + idToken}}
        const reply = await axios.get("http://localhost:4000/wisdom", config);
        setLastAPIReply(reply.data);
    }

    const handleSignIn = async ()=> 
    {
        //TODO: Clear this state variable when log in doesn’t work.

        const signInCredentials = await signInWithPopup(auth, googleAuthProvider)
        const signedInUser = signInCredentials.user
        setUser(signedInUser)
    }


    return (
        <div>
            <pre>{JSON.stringify(auth)}</pre>
            <h2>Auth Demo</h2>

            <button onClick={handleSignIn}>Sign in</button>
            <button onClick={() => {auth.signOut(); setUser(null)}}>Sign out</button>
        {/* //TODO:clear the user state variable when you sign out, too. */}
            <div>{user?.displayName}
            {user && user.photoURL && <img src = {user.photoURL} />}</div>
           
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

