import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"




function Add () {

    /* Didn't work */

    // const [data, setData] = useState({
    //     title : "",
    //     price: "",
    //     description: "",
    //     image: ""
    // })
    /* *** */

    const navigate = useNavigate()
    const url = "http://localhost:8000/api/products/create";

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    console.log(title);

    const handleSubmit = () => {
        const credentials = {title, price, description, image}
        axios.post(url, credentials)
            .then(res => {
                navigate('/admin')
            }) 
    }


    return (
        <div>
            <form>
                <label>Title</label>
                <input type="text" id="title" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
                <label>Price</label>
                <input type="text" id="price"  placeholder="price " onChange={(e) => setPrice(e.target.value)}/>
                <label >Description</label>
                <input type="text" id="description" placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                <label >Image</label>
                <input type="text" id="image" placeholder="image link" onChange={(e) => setImage(e.target.value)}/>
            </form>
            <button onClick={handleSubmit}>Save</button>
            <button onClick={() => navigate('/admin')}>Cancel</button>
        </div>
    )
}

export default Add