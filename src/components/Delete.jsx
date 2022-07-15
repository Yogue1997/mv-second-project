import axios from "axios";
import { useNavigate, useParams } from "react-router-dom"
import "../css/Delete.css"


function Delete() {

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
                console.log('Error : ', error.message);
            })
    }

    const navigate = useNavigate()

    return (
        <div id="mainDel">
            <div id="child">
                <h1 id="quest"> <strong>ARE YOU SURE ?</strong> </h1> <br />
                <div id="delBtnDiv">
                    <button onClick={handleDelete} className="delBtn yes">YES</button>
                    <button onClick={() => navigate('/admin')} className="delBtn no">NO</button>
                </div>
            </div>
        </div>
    )
}

export default Delete