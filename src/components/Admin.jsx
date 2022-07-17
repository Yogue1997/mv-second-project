import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Admin.css'
import Pop from "./Pop";


function Admin() {

    const api = "http://localhost:8000/api/products";

    const [admin, setAdmin] = useState([])
    const [pop, setPop] = useState(false);
    const [itmId, setItmId] = useState()

    const navigate = useNavigate()
    console.log('item id' ,itmId);

    // console.log(admin);

    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setAdmin(res.data.products);
            })
    }

    // pop comp

    const url = `http://localhost:8000/api/products/${itmId}`;

    const [img , setImg] = useState('')
    console.log('pop img' + img);

    const fetchPop = () => {
        axios.get(url)
        .then((res) => {
            setImg(res.data.products.image)
        })
    }


    //

    const deletePg = (e) => {
        // e.preventDefault()
        setPop(true)
    }

    useEffect(() => {
        fetch()
        // fetchPop()
    }, [])

    const image = img

    return (
        <div id="Admin">
            <div id="formAm">
                <div id="mainAdmin">
                    <button onClick={() => navigate('/add')} id="adBtn">ADD</button>
                    <h1 onClick={() => navigate('/')} id="x"></h1>
                </div>
                {admin.map(resp => 
                    <div key={resp.id} id="divForm">
                        <form id="adFrm">
                            <label className="bdfrm"><strong> Id :  </strong> </label>
                            <input type="number" value={resp.id} readOnly className="bdfrm input" />
                            <label className="bdfrm" ><strong>Title : </strong></label>
                            <input type="text" value={resp.title} readOnly className="bdfrm input" />
                            <div id="frbtn">
                                <button onClick={() => navigate(`/update/:${resp.id}`)} className="buttonAdm update">Uptdate</button>
                                <button  onClick={(e) => {
                                    e.preventDefault()
                                    deletePg()
                                    setItmId(resp.id)
                                    fetchPop()
                                } }  className="buttonAdm delete">Delete</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
            <Pop  open={pop} onClose = {() => setPop(false)} id={itmId} image={image} navigate = {navigate}/>
        </div>
    )
}

export default Admin

