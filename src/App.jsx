import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import CategoryMeals from "./components/CategoryMeals";
import Layout from "./components/Layout";
import { CartContextProvider } from "./store/CartContext";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CLoader from "./pages/CLoader"; 
import { FancyLoader } from "./pages/fancy_loader";
import LinearLoader from "./pages/LinearLoader";
import SignUpLoginPage from "./pages/SignUpLoginPage";

function App() {
  return (
    <CartContextProvider> {/* Shared cart across pages */}
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/loading" element={<CLoader />} />
          <Route path="/linear_load" element={<LinearLoader />} />
          <Route path="/LoginPage" element={<LoginPage/>}/>
          <Route path="/SignUpPage" element={<SignUpLoginPage/>}/>
          <Route path="/loading_main" element={<FancyLoader/>}/>
          {/* Layout wraps Mainpage and CategoryMeals */}
          <Route element={<Layout />}>
            <Route path="/main" element={<Mainpage />} />
            <Route path="/main/category/:categoryName" element={<CategoryMeals />} />
          </Route>
        </Routes>
      </Router>
    </CartContextProvider>
  );
}

export default App;
