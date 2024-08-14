import { Fragment } from 'react'
import { useMainContext } from '../../contexts/MainContext'
import { collection, getDocs } from 'firebase/firestore'
import { FIRESTORE } from '../../firebase.config'

let productsArray = ['Shoes', 'Clothes', 'Watches']
export const Products = () => {
  const useMain = useMainContext()

  const { setCartCount, cartItem, setCartItem } = useMain

  const handleCart = (item, type = 0) => {
    //   console.log(item) ;

    setCartCount(prev => type ? prev - 1 : prev + 1)

    setCartItem((prev) => {
      return {
        ...prev,
        [item]: type ? prev[item] - 1 : prev[item] + 1
      }
    })

    //   alert('added to cart') ;
  }

  console.log(cartItem)

  const handleGetData = async () => {
    console.log("handle");

    let response = await getDocs(collection(FIRESTORE, "cartProdcuts"));
    let TEMP = [];
    console.log(response);

    response.forEach(doc => {
      let data = {
        id: doc.id,
        info: doc.data()
      }
      console.log(data);

      // console.log(`${doc.id} => ${doc.data()}`);
      TEMP.push(data);
    })
    console.log(TEMP);

  }

  return (
    <>
      <div className="products-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
        {productsArray.map(item => (
          <Fragment key={item}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <h2>{item}</h2>
              <button className='btn btn-success' onClick={() => handleCart(item)}>Add to Cart</button>
              {cartItem[item] > 0 && (
                <button className='btn btn-danger' onClick={() => handleCart(item, 1)}>Remove</button>
              )}
            </div>
          </Fragment>
        ))}

        <button onClick={handleGetData}>Get Data</button>
      </div>

    </>


  )
}
