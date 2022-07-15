import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"



function Delete () {

    const params = useParams()



    const id = params.id.slice(1);

    let check = Number(id)

    console.log(typeof check);

    const url = `http://localhost:8000/api/products/delete/${id}`;

    const handleDelete = () => {
        axios.delete(url)
        .then(res => {
            navigate('/admin')
        })
        .catch(error => {
            console.log('Error : ' , error.message);
        }) 
    }

const navigate = useNavigate()

    return (
        <div>
            <h1> <strong>ARE YOU SURE ?</strong> </h1>
            <button onClick={handleDelete}>YES</button>
            <button onClick={() => navigate('/admin')}>NO</button>
        </div>
    )
}

export default Delete