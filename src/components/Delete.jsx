import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"



function Delete () {

    const params = useParams()

    const id = params.id

    const url = `http://localhost:8000/api/delete/${id}`;

    const handleDelete = () => {
        axios.delete(url)
        .then(res => {
            navigate('/admin')
        })
    }

const navigate = useNavigate()

    return (
        <div>
            <h1> <strong>ARE YOU SURE ?</strong> </h1>
            <button onClick={() => handleDelete()}>YES</button>
            <button onClick={() => navigate('/admin')}>NO</button>
        </div>
    )
}

export default Delete