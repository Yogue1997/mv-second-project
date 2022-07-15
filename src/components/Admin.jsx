import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Admin.css'

function Admin() {

    const api = "http://localhost:8000/api/products";

    const [admin, setAdmin] = useState([])

    const navigate = useNavigate()

    console.log(admin);

    const fetch = () => {
        axios.get(api)
            .then((res) => {
                setAdmin(res.data.products);
            })
    }

    useEffect(() => {
        fetch()
    }, [])

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
                                <button onClick={() => navigate(`/delete/:${resp.id}`)} className="buttonAdm delete">Delete</button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Admin