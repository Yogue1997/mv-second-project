import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



function Admin () {

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
        <div>
            <div>
                <button onClick={() => navigate('/add')}>ADD</button>
                <h1>❌</h1>
            </div>
            {admin.map(resp => 
                <div key={resp.id}>
                    <form >
                        <label >Id : </label>
                        <input type="number" value={resp.id} readOnly/>
                        <label >Title : </label>
                        <input type="text" value={resp.title} readOnly/>
                        <button onClick={() => navigate(`/update/${resp.id}`)}>Uptdate</button>
                        <button onClick={() => navigate(`/delete/${resp.id}`)}>Delete</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Admin