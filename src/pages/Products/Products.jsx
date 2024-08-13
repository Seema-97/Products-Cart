import React, { Fragment, useState } from 'react'
import { useMainContext } from '../../contexts/MainContext'

let productsArray = ['Shoes' , 'Clothes' , 'Watches']
export const Products = () => {
    const useMain = useMainContext()

    const { setCartCount , cartItem , setCartItem } = useMain
 
    const handleCart = (item) => {
    //   console.log(item) ;

      setCartCount(prev => prev+1)
   
        setCartItem((prev) => {
            return {...prev ,
                 [item] : prev[item] + 1 
              }
           })
      
    //   alert('added to cart') ;
    }

    console.log(cartItem)

  return (
      <>
      <div className="products-container" style={{display: 'flex', flexDirection: 'column', gap : '20px' , margin : '20px'}}>
      {productsArray.map(item => (
      <Fragment key = {item}>
        <div style={{display: 'flex', gap : '20px'}}>
        <h2>{item}</h2>
        <button className='btn btn-success'  onClick={() => handleCart(item)}>Add to Cart</button>
        </div>
      </Fragment> 
    ))}
      </div>
    
    </>


  )
}
