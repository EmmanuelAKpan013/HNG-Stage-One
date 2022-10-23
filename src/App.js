import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage />}></Route>
          <Route path="/profile" element={<ProfilePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
