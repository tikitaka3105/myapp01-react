import { useEffect, useState } from "react";


const Initial = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const url = "http://localhost:8080/api/initial";

    const fetchData = () => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setMessage(data.message);
            setStatus(data.status);
        })
        console.log("access completed");
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <p>message: {message}</p>
            <p>status: {status}</p>
            <button onClick={fetchData}>Re-Request</button>
        </>
    );
};

export default Initial;