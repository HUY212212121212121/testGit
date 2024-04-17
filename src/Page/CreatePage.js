import React, { useEffect, useState } from 'react';
import { useFormAction, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as Yup from 'yup';
import Header from '../Header';
import {v4 as uuidv4} from 'uuid'

function CreatePage(props) {
    // const validationSchema = Yup.object().shape({
    //     name: Yup.string()
    //         .required('Bạn chưa nhập tên này'),
    //     price: Yup.string()
    //         .required('Bạn chưa nhập tiền này'),
    //     quantity: Yup.string()
    //         .required('Bạn chưa nhập số lượng này')
    // });
    // const formOptions = { resolver: yupResolver(validationSchema) };
   const navigate=useNavigate();
    let {products,setProducts}= props
 const [product,setProduct] = useState({name:"",price:"",quantity:""});
//  useEffect(() => {
//     reset(product);
// }, [product]);
 const {  reset, formState: { errors } } = useForm();
 function handleInput(e)
 {
let{name,value}=e.target;
setProduct({...product,[name]:value});
 }
 function handleSubmit(e)
 {
    e.preventDefault();
    let dataSubmit={...product,
        id:uuidv4()}
        setProducts(pre=>[...pre,dataSubmit]);
        navigate('/list')
 }
    return (
        <div className='row'>
            
            <h1  class="text-center">Create Form</h1>
            <form  onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
    <label htmlFor="name" class="form-label">Name:</label>
    <input type="name" class="form-control" id="name" placeholder="Enter name" name="name" onChange={handleInput}
    required/>
    <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="price" class="form-label">Price:</label>
    <input type="number" class="form-control" id="price" placeholder="Enter price" name="price"  onChange={handleInput}/>
  </div>
  <div className="mb-3 mt-3">
    <label htmlFor="quantity" class="form-label">Quantity:</label>
    <input type="number" class="form-control" id="quantity" placeholder="Enter quantity" name="quantity"  onChange={handleInput}/>
  </div>
  <div class="text-center">
    <button type="submit" class="btn btn-success">SUBMIT</button>
  </div>

  
</form>
        </div>
    );
}

export default CreatePage;