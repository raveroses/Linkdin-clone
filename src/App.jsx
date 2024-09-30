import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Article from "./pages/Article";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Body />
              </div>
            }
          />
          <Route path="/article" element={<Article />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
