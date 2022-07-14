import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"



function View () {

    const params = useParams()

    const id = params.id

    // const [def, setDef] = useState(id)

    const [product, setProduct] = useState([])

    console.log(product);

    const fetch = () => {
        const api = `http://localhost:8000/api/products/${id}`;
        axios.get(api)
        .then((res) => {
            // console.log(res.data.product);
            setProduct(res.data.product)
        })
    }

    // const test = async () => {
    //     const res = await fetch(api)
    //     const data = await res.json()
    //     // console.log(data);
    // }j9

    useEffect (() => {
        fetch()
        // test()
    }, [])

    console.log(id);
    // console.log(product);



    return (
        <div>
            <p>test view</p>
        </div>
    )
}


export default View