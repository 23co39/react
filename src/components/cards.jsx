import React from "react";

function Card ({username,btnText}) {
    return (
        <>
        <button class="bg-sky-500 hover:bg-sky-700 ...">Save changes</button>
        <h1>{username}</h1>
        <h2>{btnText}</h2>
        </>
    )
}

export default Card