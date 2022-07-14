import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";



function Update () {

    const params = useParams()
    const id = params.id
    const navigate = useNavigate()

    const url = `http://localhost:8000/api/products/:${id}`;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const fetch = () => {
        axios.get(url)
            .then((res) => {
                setTitle(res.data.products.title)
                setPrice(res.data.products.price)
                setDescription(res.data.products.description)
                setImage(res.data.products.image)
            })
    } 

    const handleSubmit = async () => {
        const upUrl = `http://localhost:8000/api/products/update/:${id}`;
        const credentials = { title, price, description, image };
        const data = await axios.put(url, credentials)
        .then(res => {
            navigate('/admin')
        })
    }

    useEffect(() => {
        fetch()
    }, [])

    return(
        <div>
            <form >
                <label>Title</label>
                <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Price</label>
                <input type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description</label>
                <input type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Image</label>
                <input type="text" placeholder="image link" value={image} onChange={(e) => setImage(e.target.value)} />
                <button onClick={() => handleSubmit()}>Save</button>
                <button onClick={() => navigate('/admin')}>Cancel</button>
            </form>
        </div>
    )
}

export default Update;