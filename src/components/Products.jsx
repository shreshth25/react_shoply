import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/cartSlice'
import ProductCard from './ProductCard'


const Products = () => {
  const dispatch = useDispatch()
  const [products, setProduct] = useState([])


  useEffect(()=>{
    const fetchProducts = async()=>{
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
        console.log(data)
        setProduct(data)
    }

    fetchProducts()
  },[])


  return (
    <div className='container'>
        <div className='row'>
        {
        products.map((product)=>{
            return (
                <ProductCard product={product} key={products.id}/>
            )
        })
      }
        </div>
    </div>
  )
}

export default Products
