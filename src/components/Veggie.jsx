import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Veggie() {

  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  },[]);


  const getVeggie = async () => {
    const check = localStorage.getItem('veggie');
    console.log()
//making it so it doesn't fetch the api every time you refresh 
    if(check && check !== undefined){ 
      try {
        const parsedVeggie = JSON.parse(check);
        setVeggie(parsedVeggie);
        console.log("Loaded veggie from localStorage:", parsedVeggie);

      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
      }
     
    } else { 

      try {

        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=63a977b148fe498583d565fe6ea0fed7&number=9&tags=vegetarian`);
    const data = await api.json();
      localStorage.setItem("veggie" , JSON.stringify(data.recipes))
      setVeggie(data.recipes)
    console.log("I am the data.recipes" , data.recipes)

      } catch (error) {
        console.error("Error fetching data from API:", error);
      }

    

     }
  }
//taking the array and saving it as a string with " JSON.stringify(data.recipes)"

  return (
    <div>
       <Wrapper>
        <h3>Veggie Picks</h3>
        <Splide 
        options={{
          width: 1900,
          perPage: 3,
          gap: 30,
        }}
        >
        {veggie.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                <Gradient></Gradient>
              </Card>
            </SplideSlide> 
          );
        })}
        </Splide>
        </Wrapper>
   </div>

  ) ;
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute; 
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%; 
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
`

export default Veggie;

 