import { useState } from "react"


export default function  Counter() {
    const [count , setCount] =useState<number>(0)
    return(
        <div>
            <p>Ordered Items {count}</p>
            <button
            onClick={()=>setCount(count+1)}>Add One More</button>
        </div>
    )
}