import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'

const ProductCard = ({product}) => {
  const dispatch = useDispatch()

  const handleAdd = (product)=>{
    dispatch(add(product))
  }

  return (
    <div className='col-md-4'>
      <div className="card text-center p-2 m-2" style={{height:"400px"}} >
          <img src={product.image} className="card-img-top mx-auto" alt="..." style={{height:"200px", width:"200px"}}/>
          <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <button className="btn btn-primary" onClick={()=>{handleAdd(product)}}>Add to cart</button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard
