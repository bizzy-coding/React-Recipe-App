import { useEffect } from "react";
function Popular() {
  useEffect(() => {
    getPopular();
  },[]);
  const getPopular = async () => {
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=63a977b148fe498583d565fe6ea0fed7&number=9`);
    const data = await api.json();
    console.log(data)
  }
  return <div>Popular</div>
}
export default Popular;

