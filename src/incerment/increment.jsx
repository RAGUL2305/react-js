import React,{ useState } from "react";
import './increment.css';

    function Counter(){
        const[count,setCount] = useState(0);
        const increment = () => {
            setCount(prevCount => prevCount + 1);
        };

        const decrement = () => {
            setCount(prevCount => prevCount -1); 
        }
    
    return (
    <div>
        <button className = 'decrement' onClick = {decrement}>decrement</button>
        <h2>
            count : {count}
        </h2>
        <button className = 'increment' onClick={increment}>increment</button>
    </div>
  );
}


export default Counter;