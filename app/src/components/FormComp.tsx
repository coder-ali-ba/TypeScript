import React, { useState } from 'react'

interface ChaiFormProps{
    onSubmit(order:{name :string ; cups :number;}): void;
}

function FormComp({onSubmit}:ChaiFormProps) {
    const [name , setName] = useState<string>('Cutting')
    const [cups , setCups] = useState<number>(0)

    function handleSubmit (e:React.FocusEvent<HTMLFormElement>){
      e.preventDefault()
      onSubmit({name , cups})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text"
         value={name}
         onChange={(e :React.ChangeEvent<HTMLInputElement>)=>{
            setName(e.target.value)
         }}
        />

        <label>Cups</label>
        <input 
        type='number'
         value={cups}
         onChange={(e :React.ChangeEvent<HTMLInputElement>)=>{
            setCups(Number(e.target.value))
         }}
        />
        <button type='submit'>Place Order</button>
    </form>
  )
}

export default FormComp
