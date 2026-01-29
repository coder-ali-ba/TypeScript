import type { Item } from "../types"
import ItemCard from "./ItemCard"

interface itemListprops {
    ItemList : Item[]
}

export function ItemsList ({ItemList} :itemListprops){
    return(
        <div>
     ItemsLista 
         {ItemList.map((list)=>(
            <div key={list.itemId}>
                <ItemCard  itemId={list.itemId} itemName={list.itemName} itemDesc={list.itemDesc}/>
            </div>
         ))}
         
        </div>
    )
}