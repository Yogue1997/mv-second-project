import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";






function Home () {

    const api = "http://localhost:8000/api/products"; // local api

    const url = "https://fakestoreapi.com/products"; // api from my previous project ( I am using it just to test axios)

    const [data , setData] = useState([]) // useState for my local api

    const [test, setTest] = useState([]) // useState for the testing api

    const navigate = useNavigate() // I haven't used it yet


    // FETCH
    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setData(res.data)
            })
    }
    const fetchTEst = () => {
        axios.get(url)
            .then((res) => {
                setTest(res.data)
            })
    }


    useEffect (() => {
        fetch()
        fetchTEst()
    }, [])

        console.log(data);
        console.log(test);


    return (
        <>
            <div>
                <h1>Home</h1>
            </div>
        </>
    )
}

export default Home