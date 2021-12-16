import { useState } from 'react'

export const useForm = (initialState={}) => {
    // aqui van los valores
    const [value, setvalue] = useState(initialState)
    //me reinicia el state
    const reset = ()=>{
        setvalue(initialState)

    }
   
    // este me actualiza el state
    const handleInputChange=({target})=>
    {
        
        setvalue({...value,
            [target.name]:target.value})
        
    }
  
    //retorno
   return [value,handleInputChange,setvalue,reset]
}