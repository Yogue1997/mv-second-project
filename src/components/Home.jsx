import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Home.css'





function Home() {

    const api = "http://localhost:8000/api/products"; // local api

    const [data, setData] = useState([]) // useState for my local api

    const navigate = useNavigate() // I haven't used it yet


    // FETCH
    const fetch = () => {
        axios.get(api)
            .then((res) => {
                // console.log('data');
                // console.log(res.data);
                setData(res.data.products)
            })
    }

    const feTch = async () => {
        const resp = await fetch(api)
        const data = await resp.json()
        console.log(data);
    }




    useEffect(() => {
        fetch()
    }, [])

    // console.log(data);
    // console.log(test);

    const priceColor = {
        color: "red"
    }







    return (

        <>
            <div id="homeProducts">
                {/* <h1>Home</h1> */}
                {data.map(res =>
                    <div onClick={() => navigate(`/view/:${res.id}`)} key={res.id} className="homeChild">
                        <div >
                            <p id="title">Title : <strong >{res.title}</strong> </p>
                            <img src={res.image} className="mainImage" />
                        </div>
                        <h3>
                            Price : $ <strong style={priceColor}>{res.price}</strong>
                        </h3>
                    </div>
                )}
            </div>
        </>
    )
}

export default Home