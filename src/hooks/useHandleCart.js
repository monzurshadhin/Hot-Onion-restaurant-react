import { useEffect, useState } from "react";
import { addTodb, deleteLoaclStorage, getStoredCart, removeFromDb } from "../utilities/fakedb";
import useFoods from "./useFoods";

const useHandleCart = () =>{
    
    const [foodCart,setFoodCart] = useState([]);
    
    
    //    console.log(cart)
    const handleAddToCart = ([details,quantity]) =>{
        console.log(details)
        console.log(quantity)
        addTodb(details.id,quantity)
        
        
        }

    const {foods} = useFoods();
    // console.log(foods)
    
    useEffect(()=>{
        if(foods.length){
            const savedCarts = getStoredCart();
            const storedCart = [];
            for (const key in savedCarts){
                const addedFood = foods.find(food => food.id === parseInt(key))
                if(addedFood){
                    const quantity = savedCarts[key];
                    addedFood.quantity = quantity;
                    storedCart.push(addedFood)
                    // setCartQuantity(storedCart.length)
                }
            }
            setFoodCart(storedCart);
        }
    },[foods,foodCart])//food load howar pore ei use effect kaj korbe and 
    
    const handleRemove =(key)=>{
        
        const newCart = foodCart.filter(food => food.id !== key);
        console.log(newCart)
        setFoodCart(newCart);
        removeFromDb(key)
    } 
    const handleOrder =()=>{
        deleteLoaclStorage();
        setFoodCart([]);
    }
        return {
            handleAddToCart,
            foodCart,
            handleRemove,
            
            handleOrder
        }
}
export default useHandleCart;