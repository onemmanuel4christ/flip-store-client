import React from 'react'
import { useStateValue } from '../../StateProvider';
import './CheckoutProducts.css'


function CheckoutProducts({id, image, title, price, rating}) {
  const [{basket}, dispatch] = useStateValue();

   const removeFromBasket =()=>{
      dispatch({
        type: "REMOVE_FROM_BASKET",
        id: id,
      })
   }
   const addToBasket = () =>{
    // dispatch
    dispatch({
        type: "ADD_TO_BASKET",
        item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
        }
    })
}
  return (
      <div className='checkoutProducts'>
          <img src={image}  alt="" className='checkoutProducts__image'/>
          <div className='checkoutProducts__info'>
              <p className='checkoutProducts__title'>{title}</p>
              <p className=''>
                  <small>₦ </small>
                  <strong>{price}</strong>
              </p>
              <div className='checkoutProducts__rating'>
                  {Array(rating)
                  .fill()
                  .map((_, i) =>(
                      <p>⭐</p>  
                  ))} 
              </div>   
              <button onClick={removeFromBasket}>Remove</button> {" "}
              <button onClick={addToBasket}>Add</button> 

          </div>
      </div>
   )
}

export default CheckoutProducts