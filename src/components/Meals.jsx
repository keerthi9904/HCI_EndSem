import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";
import EmojiParade from "../pages/EmojiParade.jsx";

const requestConfig = {};

// Correct category list
const categories = [
  "Pain Relief",
  "Antibiotics",
  "Allergy Relief",
  "Diabetes",
  "Digestive Health",
  "Hypertension",
  "Heart Health",
  "Supplements"
];

export default function Meals({ searchQuery }) {
  const { data: loadedMeals, isLoading, error } = useHttp(
    "http://localhost:3000/meals",
    requestConfig,
    []
  );

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  function handleCategoryClick(category) {
    setShowLoader(true);
    setTimeout(() => {
      navigate(`/main/category/${category}`);
    }, 1000); // delay for loader effect
  }

  if (isLoading) {
    return <p className="center">Fetching medicines...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch medicines" message={error} />;
  }
  const filteredMeals = searchQuery
  ? loadedMeals.filter((meal) =>
      meal.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : loadedMeals;

  return (
    <div>
      {showLoader && <EmojiParade />}
      <div className="category-container">
        {categories.map((category) => (
          <button key={category} className="category-tile" onClick={() => handleCategoryClick(category)}>
            {category}
          </button>
        ))}
      </div>

      <ul id="meals">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))
        ) : (
          <p style={{ color: 'gray' }}>No medicines found matching "{searchQuery}" 😕</p>
        )}
      </ul>
    </div>
  );
}