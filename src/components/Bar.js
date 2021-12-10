import React, { useState } from 'react';
import CocktailMenu from './cocktailApi';
import "./style.css";
import CocktailCard from './CocktailCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(CocktailMenu.map((newCock) => {
    return newCock.category;
})), "All",];


const Bar = () => {

    const [cocktail, setCocktail] = useState(CocktailMenu);
    const [cockList] = useState(uniqueList);

    const filterItem = (category) => {

        if (category === "All") {
            setCocktail(CocktailMenu);
            return;
        }
        const newList = CocktailMenu.filter((newCock) => {
            return newCock.category === category;
        });
        setCocktail(newList);

    }

    return (
        <>
            <Navbar filterItem={filterItem} cockList={cockList} />
            <CocktailCard cocktail={cocktail} />

        </>
    )
}

export default Bar
