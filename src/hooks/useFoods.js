import { useEffect, useState } from "react";
import { useHistory } from "react-router";

const useFoods =()=>{
    const [foods, setFoods] = useState([]);
    const [keyWord, setKeyWord] = useState("breakfast");
    const [selectedFoods, setSelectedFoods] = useState([]);
    const [quantity,setQuantity] = useState(1);
    const [matchedFood,setMactchedFood] = useState([])
    
  console.log(matchedFood)
  console.log(selectedFoods)
    useEffect(() => {
      fetch("/foods.json")
        .then((res) => res.json())
        .then((data) => setFoods(data));
    }, []);
  
    useEffect(() => {
      const selectedFood = foods.filter((food) => food.category === keyWord);
      setSelectedFoods(selectedFood);
      setMactchedFood(selectedFood);
    }, [keyWord,foods]);
  
    
    const handleFood = (props) => {
        setKeyWord(props)
    };

    const history = useHistory();
    const handleFoodDetails = (props) =>{

      history.push(`/details/${props}`)
    }
    // console.log(foods)

    
    
    
    const handleAddButton = () =>{
        const newQuantity = quantity+1;
        if(newQuantity<=10){
            setQuantity(newQuantity);
        }
        
    }
    const handleRemoveButton = () =>{
        const newQuantity = quantity-1;
        if(newQuantity>=1){
            setQuantity(newQuantity);
        }
        
    }
    const handleSearch = (e) =>{
        console.log(e.target.value)
        const searchText = e.target.value;
        const matchedFood = selectedFoods.filter(food => food.name.toLowerCase().includes(searchText.toLowerCase()))
        console.log(matchedFood);
        setMactchedFood(matchedFood);
    }
    return {
        handleFood,
        foods,
        selectedFoods,
        handleFoodDetails,
        handleRemoveButton,
        handleAddButton,
        quantity,
        handleSearch,
        matchedFood,
    };
}
export default useFoods;