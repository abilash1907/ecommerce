import { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const Productcontext=createContext(null)

export default function Context({children}){
    const [items,setItems]=useState([])
    const [id,setId]=useState(null)
    const [show, setShow] = useState(false);
    const [token,setToken]=useState(null)
    const [card,setCard]=useState([])
    const navigate=useNavigate()
    return(
        
        <Productcontext.Provider value={{items,setItems,id,setId,show,setShow,token,setToken,navigate,card,setCard}}>
            {children}
        </Productcontext.Provider>
        
    
    )
}