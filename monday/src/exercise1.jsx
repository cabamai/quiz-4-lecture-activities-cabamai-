import React from "react";
import { useState, useEffect } from "react";

function FetchData(){
    const [posts,setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    useEffect(() => {
        const load = async() => {
            try{    
                const res = await fetch(URL);
                if(!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                setPosts(data);
            } catch(err){
                setError(err.mesage);
            } finally{
                setLoading(false);
            }
        }
        load();
    },[]);

    if (loading) return <p>Loading...</p>
    if(error) return(
        <p style={{ color: 'crimson'}}>
            Error: {error}
        </p>
    );

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(p=>(
                    <li key={p.id}>{p.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default FetchData;