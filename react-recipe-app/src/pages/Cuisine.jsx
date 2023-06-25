import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {

    const [Cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data  = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=63a977b148fe498583d565fe6ea0fed7&cuisine=${name}`);
            
        const recipes = await data.json();
        setCuisine(recipes.results);

    };

    useEffect(() => {
        getCuisine(params.type)
        console.log(params.type)
    }, [params.type]);

  return <div></div>;
  
}

export default Cuisine