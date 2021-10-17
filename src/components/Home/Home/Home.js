import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import Footer from '../Footer/Footer';

const Home = () => {
    // const {allContext,allFoods,allHandles} = useAuth();
    // const {selectedFoods} =allFoods;
    // const [searcedResult,setSearchResult] =useState([])
    // console.log(selectedFoods)
    // const handleSearch = (e) =>{
    //     console.log(e.target.value)
    //     const searchText = e.target.value;
    //     const matchedFood = selectedFoods.filter(food => food.name.toLowerCase().includes(searchText.toLowerCase()))
    //     console.log(matchedFood);
    //     setSearchResult(matchedFood)
    //     setSearchResult(selectedFoods)
    //     // setMactchedFood(matchedFood);
    // }

    return (
        <div>
            <Banner></Banner>
            <Foods></Foods>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;