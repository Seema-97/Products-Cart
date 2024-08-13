import One from "../../components/One/One"
import { useMainContext } from "../../contexts/MainContext"


const Home = () => {
    const useMain = useMainContext()

    return (
        <div>
        
          
            {/* <h1>Home -  {useMain.userName}</h1> */}
            {/* <One /> */}

            <h1>Home</h1>
        </div>
    )
}

export default Home