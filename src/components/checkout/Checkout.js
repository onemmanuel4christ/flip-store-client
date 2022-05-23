import React from 'react'
import { useStateValue } from '../../StateProvider';
import CheckoutProducts from '../checkoutProducts/CheckoutProducts';
import Subtotal from '../subtotal/Subtotal'
import './Checkout.css'
import Slide from 'react-reveal/Slide';

function Checkout() {
  const [{basket}, dispatch] = useStateValue();

  return (
    <Slide left>
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' 
                src='https://s1-ecp.signs.com/4916/Advert-Images-vs-Real-Life-Header.jpg'
                alt=''
                />
                <div>
                    <h2 className='checkout__title'>
                        Your shoppig basket
                    </h2>
                    {basket.map(item =>(
                        <CheckoutProducts 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    </Slide>
  )
}

export default Checkout 