import React ,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const Update = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState('');
    const params=useParams();
    const navigate=useNavigate();

    useEffect(()=>
    {
        getProductDetails();
    },[])

  const getProductDetails = async () => {
        console.warn(params)
        let result = await fetch(`http://localhost:5000/products/${params.id}`);
        result = await result.json();
        setName(result.name);
        setPrice(result.price);
        setCategory(result.category);
        setCompnay(result.company)
    }
    const Update_product = async () => {
        console.warn(name, price, category, company)
        let result = await fetch(`http://localhost:5000/products/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ name, price, category, company }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            navigate('/')
        }

    }
   
  return (
  
       <div className='product'>
            <h1>Update Product</h1>
            <input type="text" placeholder='Enter product name' className='inputbox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            /><br/>

            <input type="text" placeholder='Enter product price' className='inputbox'
                value={price} onChange={(e) => { setPrice(e.target.value) }}
            /><br/>

            <input type="text" placeholder='Enter product category' className='inputbox'
                value={category} onChange={(e) => { setCategory(e.target.value) }}
            /><br/>

            <input type="text" placeholder='Enter product company' className='inputbox'
                value={company} onChange={(e) => { setCompnay(e.target.value) }}
            /><br/>


            <button  onClick={Update_product} className='appButton'>Update Product</button>

    </div>
  )
}

export default Update
