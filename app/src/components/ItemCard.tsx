import React from "react";

interface itemcardProp {
  itemId: number;
  itemName: string;
  itemDesc: string;
}

function ItemCard({ itemId, itemName, itemDesc }: itemcardProp) {
  return (
    <div>
      ItemCard
      <p>{itemId}</p>
      <p>{itemName}</p>
      <p>{itemDesc}</p>
    </div>
  );
}

export default ItemCard;
