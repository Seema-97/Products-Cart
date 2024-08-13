import { useRef } from "react";
import { useMainContext } from "../../contexts/MainContext"

const One = () => {
    const useMain = useMainContext() ;
    const { setUserName } = useMain;

    const un = useRef();

    const handleUser = () => {
        setUserName(un.current.value);
    }



    return (

        <div style={{ border: "1px solid red" }}>
            <h1>One </h1>
            <input type="text" ref={un} placeholder="usr nm" />
            <button onClick={handleUser}>Change</button>
        </div>
    )
}

export default One