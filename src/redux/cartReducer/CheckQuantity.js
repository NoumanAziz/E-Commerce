export const CheckQuantity = (existingItemsArray , itemToBeAdded ,qty)=>{

    
    const existing = existingItemsArray.find(item => item.id===itemToBeAdded.id);

   
    if (existing){
        return existingItemsArray.map (arryitem => (
            arryitem.id === itemToBeAdded.id ? 
            {...arryitem , quantity : arryitem.quantity+1}
            : arryitem
            ))
    }
    return [...existingItemsArray , {...itemToBeAdded , quantity :qty }]
}