import { createContext, useContext, useState } from "react"


const mainContext = createContext();

export const useMainContext = () => {
    return useContext(mainContext);
}

// eslint-disable-next-line no-unused-vars, react/prop-types
const MainContext = ({ children }) => {
    const [userName, setUserName] = useState("") ;

    const[cartCount , setCartCount] = useState(0)

    const[cartItem , setCartItem] = useState({
        Shoes : {count : 0 , price : 600} , 
        Clothes :0 ,
        Watches : 0
    })
     
   
    return (
        <mainContext.Provider value={{
            userName,
            setUserName,
            cartCount ,
            setCartCount,
            cartItem ,
            setCartItem
        }}>
            {children}
        </mainContext.Provider>
    )
}

export default MainContext