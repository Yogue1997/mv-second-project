


import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Pop from "./Pop";



function Toastify() {

    const navigate = useNavigate()

    const notify = () => {
        toast('My first notification ever')
        // navigate('/')
    }


    const [pop, setPop] = useState(false)


    return (
        <div>
            <h1>Toast</h1>
            <button onClick={notify}>Notify</button>
            <button onClick={() => setPop(true)}>Are you sure?</button>
            {/* <ToastContainer /> */}
            <Pop open={pop} onClose = {() => setPop(false)}/>
        </div>
    )
}

export default Toastify