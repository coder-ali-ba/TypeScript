interface cardProp {
    name : string,
    cost : number,
    isSpecial?:boolean 
}

export default function CardComp ({name , cost , isSpecial=false} : cardProp){
return(
    <h2>{name} {cost}</h2>
)
}