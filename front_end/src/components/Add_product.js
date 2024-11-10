import React from 'react'

const Add_product = () => {
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [category, setCategory] = React.useState('');
    const [company, setCompnay] = React.useState('');
    const addproduct=async()=>{
        console.warn(name,price,category,company);
        let result =await fetch("http://localhost:5000/add_product",{
            method:'post',
            body:JSON.stringify({name,price,category,company}),
            headers:{
                'Content-Type':'application/json'
            }
        });
        result = await result.json();
    }
   
  return (
  
       <div className='product'>
            <h1>Add Product</h1>
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


            <button  onClick={addproduct} className='appButton'>Add Product</button>

    </div>
  )
}

export default Add_product
