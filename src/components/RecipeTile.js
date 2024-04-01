import React from "react";
import "./RecipeTile.css";

export default function RecipeTile({ recipe }) {
    return (
        <div className="recipeTile">
            <img className="recipeTile-img" alt="Content connected to the recipe" src={recipe["recipe"]["image"]} onClick={() => window.open(recipe["recipe"]["url"])} />
            <p className="recipeTile-name">{recipe["recipe"]["label"]}</p>
        </div>        
    );
}