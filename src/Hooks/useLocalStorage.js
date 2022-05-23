import {useState,useEffect}from "react";

const UseLocalStorage=(key,initialValue)=>{
    
    const PREFIX ='Expenses_Tracker';
    const PrefixedKey=PREFIX + key ;
    const [value, setValue] = useState(()=>{

        const jsonValue= localStorage.getItem(PrefixedKey);
        if(jsonValue != null) return JSON.parse(jsonValue);
        if(initialValue instanceof Function){
            return initialValue();
        }
        else{
            return initialValue;
        }
});

useEffect(() => {
    localStorage.setItem(PrefixedKey, JSON.stringify(value))
}, [PrefixedKey, value])
return [value, setValue]
}

export default UseLocalStorage;
