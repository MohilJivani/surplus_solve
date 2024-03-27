import './App.css';
import RecipeTile from './components/RecipeTile.js';
import { BASE_URL, APP_ID, APP_KEY } from './api';
import Axios from "axios";
import { useState } from "react";

function App() {
    const [query, setQuery] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [healthLabel, setHealthLabel] = useState("vegan");

    const url = `${BASE_URL}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;

    async function getRecipies() {
        var result = await Axios.get(url);
        setRecipes(result.data.hits);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        getRecipies();
    }

  return (
    <div className="app">
          <h1>Food Recipe Plaza</h1>
          <form className="app-search-form" onSubmit={onSubmit}>
              <input
                  className="app-search-input"
                  type="text"
                  placeholder="Enter ingridient"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
              />

              <select className="app-select">
                  <option value="vegan" onClick={() => setHealthLabel("vegan")}>Vegan</option>
                  <option value="vegetarian" onClick={() => setHealthLabel("vegetarian")}>Vegetarian</option>
                  <option value="dairy-free" onClick={() => setHealthLabel("dairy-free")}>Dairy-free</option>
                  <option value="gluten-free" onClick={() => setHealthLabel("gluten-free")}>Gluten-free</option>
                  <option value="wheat-free" onClick={() => setHealthLabel("wheat-free")}>Wheat-free</option>
                  <option value="low-sugar" onClick={() => setHealthLabel("low-sugar")}>Low-sugar</option>
                  <option value="egg-free" onClick={() => setHealthLabel("egg-free")}>Egg-free</option>
                  <option value="peanut-free" onClick={() => setHealthLabel("peanut-free")}>Peanut-free</option>
                  <option value="tree-nut-free" onClick={() => setHealthLabel("tree-nut-free")}>Nut-free</option>
                  <option value="soy-free" onClick={() => setHealthLabel("soy-free")}>Soy-free</option>
                  <option value="fish-free" onClick={() => setHealthLabel("fish-free")}>Fish-free</option>
                  <option value="shellfish-free" onClick={() => setHealthLabel("shellfish-free")}>Shellfish-free</option>
              </select>

              <input className="app-search-btn" type="submit" value="Search" />
          </form>

          <div className="app-recipes">
              {recipes.map(recipe => {
                  return <RecipeTile recipe={recipe} />
              })}
          </div>
    </div>
  );
}

export default App;
