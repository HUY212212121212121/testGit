import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

function EditPage(props) {
    const navigate =useNavigate()
    return (
        <div>
           
            <h1 class="text-center">Edit Page</h1>
            <button className='btn btn-danger'>click to Edit</button>
            
        </div>
    );
}

export default EditPage;