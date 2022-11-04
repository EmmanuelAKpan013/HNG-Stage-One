import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
