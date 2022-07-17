import axios from 'axios';
import { toast } from 'react-toastify';
import '../css/NewDelete.css'


export default function Pop({ open, onClose, id, image, navigate }) {

    if (!open) return null

    

    const api = `http://localhost:8000/api/products/delete/${id}`;

    const handleDelete = () => {
        axios.delete(api)
            .then(res => {
                toast.success(`Item no. ${id} has been deleted`, {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                navigate('/admin')
            })
    }


    return (
        <div onClick={onClose} className='overlay'>
            <div className='modalContainer'>
                <img src={image} alt="" className='popImg' />
                <div className='modalRight'>
                    <p onClick={onClose} className='closeBtn'>X</p>
                    <div className='content'>
                        <h1>Are you sure?</h1>
                        <p>Item {id} will be gone forever</p>
                    </div>
                    <div className='btnContainer'>
                        <button className='btnPrimary bold' onClick={handleDelete}>
                            Yes
                        </button>
                        <button className='btnOutline bold' onClick={onClose}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
