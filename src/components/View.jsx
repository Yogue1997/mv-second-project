import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import '../css/View.css'


function View() {

    const params = useParams()
    // console.log(params);
    const id = params.id.slice(1);
    console.log(id);

    const navigate = useNavigate()

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



    useEffect(() => {
        fetch()
    }, [])

    const priceColor = {
        color: "red",
    };



    return (
        <div>
            <h1 id="xV" onClick={() => navigate('/')}>❌</h1>
            <div className="vParent">
                <div className="vChildren imgDiv">
                    <img id="image" src={product.image} />
                </div>
                <h3 className="vChildren"> Title :  {product.title} </h3>
                <p className="vChildren">Price : $<strong style={priceColor}>{product.price}</strong></p>
                <p className="vChildren">{product.description}</p>
            </div>
        </div>
    )
}


export default View