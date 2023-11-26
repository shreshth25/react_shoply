import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector((state)=>state.cart)
  console.log(items)
  const handleDel=(id)=>{
    dispatch(remove(id))
  }
  if(items.length)
  {
    return (
        <div className='container'>
          <div className='row mt-2'>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Image</th>
                <th scope="col">Price</th>
                <th scope="col">Product Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
            {
            items.map((item)=>{
              return (
                <tr>
                <th scope="row">{item.id} </th>
                <td><img src={item.image} style={{height:"100px", width:"100px"}}></img></td>
                <td>{item.title}</td>
                <td>Rs {item.price}</td>
                <td><button className='btn btn-danger' onClick={()=>{handleDel(item.id)}}>Remove</button></td>
              </tr>
              )
            })
          }

            </tbody>
          </table>
        </div>
      </div>
    )
  }
  else
  {
    return (
      <div className='container'>
        <div className='row mt-5 text-center'>
          <div className='col'>
            <h2>Opps! your cart is empty</h2>
          </div>
          
          <button className='btn btn-light' onClick={()=>{navigate("/")}}>Shop Now</button>
        </div>
      </div>
    )
  }

}

export default Cart
