import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
import '../css/Add.css'



function Add() {

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
        const credentials = { title, price, description, image }
        axios.post(url, credentials)
            .then(res => {
                toast.success(`New item was successfuly added`, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                // res.navigate('/admin')
                // console.log('res' , res);
            })
    }


    return (
        <div id="mainAdd">
            <form>
                <label>Title : </label>
                <input className="addInp" type="text" id="title" placeholder="title" onChange={(e) => setTitle(e.target.value)} />
                <label>Price : </label>
                <input className="addInp" type="text" id="price" placeholder="price " onChange={(e) => setPrice(e.target.value)} />
                <label >Description : </label>
                <input className="addInp" type="text" id="description" placeholder="description" onChange={(e) => setDescription(e.target.value)} />
                <label >Image : </label>
                <input className="addInp" type="text" id="image" placeholder="image link" onChange={(e) => setImage(e.target.value)} />
                <div id="addMainBtn">
                    <button className="mainAddComp addSave" onClick={() => {
                        handleSubmit()
                        navigate('/admin')
                    }}>Save</button>
                    <button className="mainAddComp addCancel" onClick={() => navigate('/admin')}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Add