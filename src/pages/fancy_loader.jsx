import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FancyLoader.css";
import CarrotImg from "../assets/carrot_bg.png"
import Tomato from "../assets/tomato.png"
import Coriander from "../assets/coriander.png"

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
          type: ["carrot","tomato", "onion", "leaf"][Math.floor(Math.random() * 4)],
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
      case "carrot":
        return (
        <img
            src={CarrotImg}  // Adjust the path to your image
            alt="Carrot"
            width="60"  // Adjust size as needed
            height="60"  // Adjust size as needed
            style={{ objectFit: "contain" }}
          />
        );
        case "tomato":
            return (
            <img
                src={Tomato}  // Adjust the path to your image
                alt="Tomato"
                width="40"  // Adjust size as needed
                height="40"  // Adjust size as needed
                style={{ objectFit: "contain" }}
              />
            );
      case "onion":
        return (
          <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="32" r="15" fill="#CE93D8" />
            <circle cx="32" cy="32" r="10" fill="#BA68C8" />
            <circle cx="32" cy="32" r="5" fill="#9C27B0" />
          </svg>
        );
      case "leaf":
        return (
            <img
            src={Coriander}  // Adjust the path to your image
            alt="Coriander"
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

      {/* <div className="steam" style={{ left: 'calc(50% - 15px)', animationDelay: '0s' }}></div>
      <div className="steam" style={{ left: 'calc(50% - 5px)', animationDelay: '1s' }}></div> */}

      {/* Bowl */}
      <div className="bowl"></div>
    </div>
  );
}

export { FancyLoader };
