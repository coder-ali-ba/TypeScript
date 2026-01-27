import type { chai } from "../types"
import CardComp from "./Card"

interface ChaiListProps{
    items :chai[]
}

function ChaiList({items}: ChaiListProps) {
  return (
    <div>
      ChaiList
      {items.map((chai)=>(
        <CardComp key={chai.id} name={chai.name} cost={chai.cost} isSpecial={chai.cost > 30}/>
      ))}
    </div>
  )
}

export default ChaiList
