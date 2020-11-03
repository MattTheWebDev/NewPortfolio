import fetch from "node-fetch";
import React from "react";
import Projectnav from "./Projectnav";

class CookingApp extends React.Component {

  constructor() {
    super()
    this.state = {
      error: null,
      isLoaded: false,
      recipeData : [],
    }
    this.fetchRecipe = this.fetchRecipe.bind(this)
    this.callRecipe = this.callRecipe.bind(this)
  }
fetchRecipe(ing) {
  console.log(ing)
 return fetch(`http://localhost:3093/foodAPI?ingredients=${ing}`)
 .then(res => res.json())
   .then(
     (result) => {
       this.setState({
         isLoaded: true,
         recipeData : result.foodResults
       });
     },
     // Note: it's important to handle errors here
     // instead of a catch() block so that we don't swallow
     // exceptions from actual bugs in components.
     (error) => {
       this.setState({
         isLoaded: true,
         error
       });
     }
   )
}

callRecipe = () => {
  let food = document.querySelector('.ingredientInput').value;
  this.fetchRecipe(food)
}



  render() {
    const cookData = this.state.recipeData
    return (
      
      <div className="recipieAppHolder">
        <Projectnav></Projectnav>
        
        <h1>What I got in the fridge</h1>
        <h2>Enter ingredients here</h2>
        <input className="ingredientInput"></input>
        <div className="searchButtonHolder">
          <button className="cookingSearchButton" onClick={() => this.callRecipe()}>Search for recipies</button>
        </div>
        <div className='recipieResults'>
            {cookData.map((recipe, index) => {
              return (
                <div key={index}>
                <div className='recipeHolder'>
                 <div className='recipeTitle'>
                  <h2>{recipe.title}</h2>
                  </div>
                  <div className='recipieImage'>
                  <img src={recipe.image} />
                  </div>
                </div>
                <br />
                </div>
              )
            })}
        </div>
      </div>
    );
  }
}

export default CookingApp;
