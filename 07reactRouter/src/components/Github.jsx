import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github(){
    const data = useLoaderData();
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     fetch("https://api.github.com/users/hiteshchoudhary").then(res => res.json()).then(data => {console.log(data); setData(data)})
    // }, [])
    return(
        <>
        <h1>Github Followers : {}</h1>
        </>
    )
}

export const githubLoader = async () => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary");
    return response.json();
}