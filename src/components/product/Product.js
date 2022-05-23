import React from 'react'
import { useStateValue } from '../../StateProvider'
import './Product.css'
import Fade from 'react-reveal/Fade';

const Product = ({id, title, image,price, rating}) => {
    const [{basket}, dispatch] = useStateValue()
console.log("this is the basket", basket)
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
      <div className='product'>
            <Fade top>
            <img src={image}
                alt='' 
            />
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>₦</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>  
                    ))}
            
                </div>
            </div>
           
            <button onClick={addToBasket}>Add to Basket</button>
    </Fade>
    </div>
  )
}
export default Product
 