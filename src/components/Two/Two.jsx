import { useMainContext } from "../../contexts/MainContext"


const Two = () => {
    const useMain = useMainContext()
    
    const{userName} = useMain

    return (

        <div>
            <h1>Two - {userName}</h1>

        </div>
    )
}

export default Two