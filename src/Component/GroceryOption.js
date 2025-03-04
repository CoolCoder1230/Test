import { GroceryGridCard } from "../Utils/Grocery"
import GroceryCard from "./GroceryCard"

export default function GroceryOption(){
    return(
        <div className="mt-20 w-[80%] comtainer mx-auto">
            <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
        <div className="container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3">
        
              {
                GroceryGridCard.map((groceryData)=><GroceryCard key={groceryData.id} groceryData={groceryData}></GroceryCard>)
              }
        
            </div>
        </div>
    )
}