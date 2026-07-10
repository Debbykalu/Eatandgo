import { useState, useEffect, use } from 'react'
import { Headers } from './meal_components/Headers.jsx'
import { Hero } from './meal_components/Hero.jsx'
import { Categories } from './meal_components/Categories.jsx'
import { Footer } from './meal_components/Footer.jsx'   
import './assets/meal.css'

export const Meal = () => {
    const [categories, setCategories] = useState([]); //Categories state to store the fetched data
    const [loading, setLoading] = useState(true); //Loading state to show a loading indicator while fetching data
    const [error, setError] = useState(false); //Error state to handle any errors that may occur during the fetch
    //This function is used to fetch data from the API. It is called when the component is mounted and whenever the dependencies change. In this case, there are no dependencies, so it will only run once when the component is mounted.
    function fetchMealCategories(){
        setLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(response => response.json())
           .then(function(data){
                setLoading(false)
                setError(false)
                setCategories(data.categories)
           

           })
                
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }
    //This hook is used to communicate with an external server to fetch data from the API. It is called when the component is mounted and whenever the dependencies change. In this case, there are no dependencies, so it will only run once when the component is mounted.
    useEffect(() => {
        fetchMealCategories();
    }, []);
          
  return (
    <>
        <Headers />
        <Hero />
        <Categories categories={categories} loading={loading} error={error} />
        <Footer />
    </>
  )
}
