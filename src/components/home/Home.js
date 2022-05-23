import React from 'react'
import Banner from '../banner/Banner'
import Product from '../product/Product'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
      <Banner />
        <div className='home__container'>
                 <h1 className='home__title'>Recommended Products <span>View All</span> </h1>
            <div className='home__row'>
                <Product 
                  id={123}
                  title="LG 2Doors Refrigerator" 
                  price={200000.00} 
                  image='https://cdn.pricebaba.com/prod/images/product/refrigerators/94718/lg-260-litre-double-door-refrigerator-gl-t292rbc3-price-india-raw-1744283.jpg'
                  rating={4}
                />
                 <Product 
                  id={123}
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
                  <Product 
                  id={123}
                  title="LG 2Doors Refrigerator" 
                  price={200000.00} 
                  image='https://cdn.pricebaba.com/prod/images/product/refrigerators/94718/lg-260-litre-double-door-refrigerator-gl-t292rbc3-price-india-raw-1744283.jpg'
                  rating={4}
                />
                 <Product 
                  id={123}
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
            </div>
            <h1 className='home__title'>Sponsored Products <span>View All</span> </h1>
            <div className='home__row'>
                <Product 
                  id={125}
                  title="Mac Pc M1" 
                  price={1000000.00} 
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiX1OSZ6U0rleL2Ob4XUnVsvm8g-8UNzS6ffAvCcImsppnUGWaW_ZPhw6kCh-oFSQX8MM&usqp=CAU'
                  rating={4}
                />

                <Product 
                  id={126}
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
                 <Product
                  id={127}
                  title="Amazon Echo" 
                  price={30000.00} 
                  image='https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/W/T/174379_1618588888.jpg'
                  rating={4}
                />
            </div>
            <h1 className='home__title'>Best Selling Products <span>View All</span> </h1>
            <div className='home__row'>
            <Product 
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
                  <Product 
                  id={123}
                  title="LG 2Doors Refrigerator" 
                  price={200000.00} 
                  image='https://cdn.pricebaba.com/prod/images/product/refrigerators/94718/lg-260-litre-double-door-refrigerator-gl-t292rbc3-price-india-raw-1744283.jpg'
                  rating={4}
                />
                 <Product 
                  id={123}
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
                  <Product 
                  id={123}
                  title="LG 2Doors Refrigerator" 
                  price={200000.00} 
                  image='https://cdn.pricebaba.com/prod/images/product/refrigerators/94718/lg-260-litre-double-door-refrigerator-gl-t292rbc3-price-india-raw-1744283.jpg'
                  rating={4}
                />
                 <Product 
                  id={123}
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
            </div>
            <h1 className='home__title'>Best Brands <span>View All</span></h1>
            <div className='home__row'>
                <Product 
                  title="64 Inch Samsung curve TV" 
                  price={600000.00} 
                  image='https://image-us.samsung.com/SamsungUS/home/televisions-and-home-theater/tvs/uhd-tv/ru7300/gallery/01_RU7300-L-Perspective-Black-031519.jpg?$product-details-jpg$'
                  rating={4}
                />
                  <Product 
                  id={123}
                  title="LG 2Doors Refrigerator" 
                  price={200000.00} 
                  image='https://cdn.pricebaba.com/prod/images/product/refrigerators/94718/lg-260-litre-double-door-refrigerator-gl-t292rbc3-price-india-raw-1744283.jpg'
                  rating={4}
                />
            </div>
        </div>
    </div>
  )
}

export default Home