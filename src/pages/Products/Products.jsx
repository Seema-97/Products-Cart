import { Fragment } from 'react'
import { useMainContext } from '../../contexts/MainContext'
import { collection, getDocs } from 'firebase/firestore'
import { FIRESTORE } from '../../firebase.config'

let productsArray = [{productName : 'Shoes',
    price: 600
},
    {productName : 'Clothes' , price :2000}, {productName : 'Watches' , price: 1300} ]
export const Products = () => {
  const useMain = useMainContext()

  const { setCartCount, cartItem, setCartItem } = useMain

  const handleCart = (item, type = 0) => {
      console.log(item) ;
    setCartCount(prev => type ? prev - 1 : prev + 1)
    //  setCartCount(prev => prev + 1)

    setCartItem((prev) => {
        console.log(prev)

               if(type){
                return {
                    ...prev,
                    [item.productName] : {count : prev[item.productName].count - 1 , price : prev[item.productName].price - item.price , name : item.productName} }
              }
              else {
                return {...prev , 
                    [item.productName] : {count : prev[item.productName].count + 1 , price : prev[item.productName].price + item.price ,  name:item.productName}
                } 
               }
            // [item]: type ? prev[item] - 1 : prev[item] + 1


    })
  }

  console.log(cartItem)

//   const handleGetData = async () => {
//     console.log("handle");

//     let response = await getDocs(collection(FIRESTORE, "cartProducts"));
//     let TEMP = [];
//     console.log(response);

//     response.forEach(doc => {
//       let data = {
//         id: doc.id,
//         info: doc.data()
//       }
//       console.log(data);

//       // console.log(`${doc.id} => ${doc.data()}`);
//       TEMP.push(data);
//     })
//     console.log(TEMP);

//   }

  return (
    <>
      <div className="products-container" style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '20px' }}>
        {productsArray.map(item => (
          <Fragment key={item.productName}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <h2>{item.productName} <span style={{fontSize :"20px"}}>Price : {item.price}</span></h2>
              <button className='btn btn-success' onClick={() => handleCart(item )}>Add to Cart</button>
              <h1>{cartItem[item.productName]?.count}</h1>
              {cartItem[item.productName]?.count > 0 && (
                <button className='btn btn-danger' onClick={() => handleCart(item,1)}>Remove</button>
              )}
            </div>
          </Fragment>
        ))}

        {/* <button onClick={handleGetData}>Get Data</button> */}
      </div>

    </>


  )
}
