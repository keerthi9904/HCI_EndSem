import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FancyLoader.css";
import Red from "../assets/red.png"
import Blue from "../assets/blue.png"
import Yellow from "../assets/yellow.png"
import CirclePill from "../assets/circle.png"

function FancyLoader() {
  const navigate = useNavigate();
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 2000); // slightly longer to see piling

    // Drop ingredients every 200ms
    const dropInterval = setInterval(() => {
      setIngredients(prev => [
        ...prev,
        {
          id: Date.now(),
          left: 45 + Math.random() * 7, 
          bottomOffset: Math.random() * 3 ,
          type: ["blue","circle", "red", "yellow"][Math.floor(Math.random() * 4)],
        },
      ]);
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(dropInterval);
    };
  }, [navigate]);

  const renderSVG = (type) => {
    switch (type) {
      case "blue":
        return (
        <img
            src={Blue}  // Adjust the path to your image
            alt="Blue Pill"
            width="60"  // Adjust size as needed
            height="60"  // Adjust size as needed
            style={{ objectFit: "contain" }}
          />
        );
        case "circle":
            return (
            <img
                src={CirclePill}  // Adjust the path to your image
                alt="Circle Pill"
                width="40"  // Adjust size as needed
                height="40"  // Adjust size as needed
                style={{ objectFit: "contain" }}
              />
            );
      case "red":
        return (
          <img
            src={Red}  // Adjust the path to your image
            alt="Red Pill"
            width="60"  // Adjust size as needed
            height="60"  // Adjust size as needed
            style={{ objectFit: "contain" }}
          />
        );
      case "yellow":
        return (
            <img
            src={Yellow}  // Adjust the path to your image
            alt="Yellow Pill"
            width="60"  // Adjust size as needed
            height="60"  // Adjust size as needed
            style={{ objectFit: "contain" }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fancy_loading-container">
      {ingredients.map((item) => (
        <div
          key={item.id}
          className="ingredient"
          style={{ left: `${item.left}%`,
          "--offset": `${item.bottomOffset}vh`,
        }}
        >
          {renderSVG(item.type)}
        </div>
      ))}
      <div className="bowl"></div>
    </div>
  );
}

export { FancyLoader };
