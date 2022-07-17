import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import '../css/Update.css'
// import styled from 'styled-component'

//update component
function Update() {

    const params = useParams()
    const id = params.id.slice(1)
    const navigate = useNavigate()

    const url = `http://localhost:8000/api/products/${id}`;//get data by id
    //data state
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [data, setData] = useState([])

    console.log(title);

    //from the id number that the user clicked on, we're fecth data

    console.log(id);
    const fetch = () => {
        axios.get(url)
            .then((res) => {
                // setData(res.data.product)
                setTitle(res.data.product.title)
                setPrice(res.data.product.price)
                setDescription(res.data.product.description)
                setImage(res.data.product.image)
            })
    }



    // setTitle(data.title);
    // setPrice(data.price);
    // setDescription(data.description);
    // setImage(data.image);

    // on click I want the data to be updated and be redirected to the admin component
    const handleSubmit = () => {
        const upUrl = `http://localhost:8000/api/products/update/${id}`;
        const credentials = { title, price, description, image };
        axios.put(upUrl, credentials)
            .then(res => {
                toast.success(
                    `Item no. ${id} have been updated`,
                    {
                        position: "top-center",
                        autoClose: 4000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    }
                );
                navigate('/admin')
                console.log("res", res);
            })
        navigate('/admin')
            .catch(error => {
                console.log('err', error.message);
                navigate("/admin");
            })
    }

    useEffect(() => {
        fetch()
        // setTitle(data.title)
        setPrice(data.price)
        setDescription(data.description)
        setImage(data.image)
    }, [])


    return (
        <div id="updateMain" >
            <form onSubmit={() => handleSubmit()} id="upFrm">
                <label>Title : </label>
                <input className="upInp" type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Price : </label>
                <input className="upInp" type="text" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label>Description : </label>
                <input className="upInp" type="text" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>Image : </label>
                <input className="upInp" type="text" placeholder="image link" value={image} onChange={(e) => setImage(e.target.value)} />
                <div id="upBtnMain">
                    <button className="upBtn save" >Save</button>
                    <button onClick={() => navigate('/admin')} className="upBtn cancel">Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default Update;