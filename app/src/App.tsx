import './App.css'
import CardComp from './components/Card'
import ChaiList from './components/ChaiList'
import type { chai } from './types'


const menu:chai[]=[
  {id :1 , name : "SadaChai" , cost :30},
  {id :2 , name : "SpecialChai" , cost :40},
  {id :3 , name : "MalaiChai" , cost :60},
  {id :4 , name : "GurhChai" , cost :80},
]


function App() {

  return (
    <>
      <article>
        <h1>React + typescript</h1>
        <CardComp name="Chai" cost={2000}/>
        <CardComp name="Kahwa" cost={2500}/>
      </article>
      {/*  */}
      <div>
        <ChaiList items={menu}/>
      </div>
    </>
  )
}

export default App
