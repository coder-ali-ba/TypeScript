import './App.css'
import FormComp from './components/FormComp'
// import CardComp from './components/Card'
// import ChaiList from './components/ChaiList'
// import ItemCard from './components/ItemCard'
import { ItemsList } from './components/ItemsList'
import SimpleCard from './components/SimpleCard'
import type { chai } from './types'
import type { Item } from './types'

// const menu:chai[]=[
//   {id :1 , name : "SadaChai" , cost :30},
//   {id :2 , name : "SpecialChai" , cost :40},
//   {id :3 , name : "MalaiChai" , cost :60},
//   {id :4 , name : "GurhChai" , cost :80},
// ]

const menuitems : Item[]=[
  {itemId : 1 , itemName : "product1" , itemDesc : "shdcusu jdhj cjdhd"},
  {itemId : 2 , itemName : "product1" , itemDesc : "shdcusu jdhj cjdhd"},
  {itemId : 3 , itemName : "product1" , itemDesc : "shdcusu jdhj cjdhd"},
]

function App() {

  return (
    <>
      {/* <article>
        <h1>React + typescript</h1>
        <CardComp name="Chai" cost={2000}/>
        <CardComp name="Kahwa" cost={2500}/>
      </article>
      
      <div>
        <ChaiList items={menu}/>
      </div> */}

      <div>
        <ItemsList ItemList={menuitems}/>
      </div>
      <div>
        <FormComp 
        onSubmit={(order)=>{
          console.log("placed" , order.name , order.cups);
          
        }}/>
      </div>

      <div>
        <SimpleCard 
         title='Chai-Sutta and TypeScript'
         footer ={<button>Order Now</button>}
        />
      </div>
    </>
  )
}

export default App
