import axios from 'axios';
import React, { useState } from 'react'

export default function NutritionalAnalysis() {
    const [ingredientVal, setIngredientVal] = useState()
    const [getNutrition, setGetNutrition] = useState(null)
    const url = `http://localhost:3000/api/data`;

    async function getAnalysis(e) {
        e.preventDefault();
        try {
            const result = await axios.get(url, {
                params: {
                    name: encodeURIComponent(ingredientVal)
                }
            });
            console.log(result.data);
            setGetNutrition(result.data["Nutrition information (calories (#), total fat (PDV), sugar (PDV) , sodium (PDV) , protein (PDV) , saturated fat (PDV) , and carbohydrates (PDV))"]);
        } catch (error) {
            console.error('Error fetching analysis:', error);
            // Handle error, e.g., display error message to user
        }
    }
    console.log(getNutrition)
    return (
        <div>
            <div className="app">
                <h1>Nutritional Analysis</h1>
                <form className="app-search-form" onSubmit={getAnalysis}>
                    <input
                        className="app-search-input"
                        type="text"
                        placeholder="Enter Ingredient"
                        value={ingredientVal}
                        onChange={(e) => setIngredientVal(e.target.value)}
                    />
                    <input className="app-search-btn" type="submit" value="Search" />
                </form>
                {getNutrition && Object.keys(getNutrition).length !== 0 && (
                <>
                    <ul>
                        <li>Calories (#): {getNutrition[0]}</li>
                        <li>Total fat (PDV): {getNutrition[1]}</li>
                        <li>Sugar (PDV): {getNutrition[2]}</li>
                        <li>Sodium (PDV): {getNutrition[3]}</li>
                        <li>Protein (PDV): {getNutrition[4]}</li>
                        <li>Saturated fat (PDV): {getNutrition[5]}</li>
                        <li>Carbohydrates (PDV): {getNutrition[6]}</li>
                    </ul>
                </>)}
            </div>
        </div>
    )
}
