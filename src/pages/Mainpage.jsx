import React from "react";
import Meals from "../components/Meals.jsx";
import ScarcitySidebar from "../components/ScarcitySidebar.jsx";
import ChatbotGreeting from "../components/ChatbotGreeting.jsx";
import { useOutletContext } from 'react-router-dom';

function Mainpage() {
  const { searchQuery } = useOutletContext();
  return (
    <>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1, borderRight: "1px solid #ccc", backgroundColor: "#f9f9f9" }}>
          <ScarcitySidebar />
        </div>
        <div style={{ flex: 4, overflowY: "auto" }}>
            <Meals searchQuery={searchQuery}/>
        </div>
        <ChatbotGreeting />
      </div>
    </>
  );
}

export default Mainpage;
