"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
    const session = useSession();
    return (
        <div>
            <div>
                <Appbar />
            </div>
            <div>Home Page</div>
            <div> {JSON.stringify(session)}</div>
        </div>
    );
}

function Appbar() {
    return (
        <div>
            <div>
                <button onClick={() => signIn()}>Signin</button>
            </div>
            <div>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        </div>
    );
}
