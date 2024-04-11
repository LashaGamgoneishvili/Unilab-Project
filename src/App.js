import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BookFlight from "./Pages/BookFlight";
import PageNotFound from "./Pages/PageNotFound";
import SignIn from "./Pages/SignIn & SignUp/SignIn";
import SignUp from "./Pages/SignIn & SignUp/SignUp";
import Personalpage from "./Pages/PersonalPage";
import AboutUs from "./Pages/AboutUs";
import Blogs from "./Pages/Blogs";
import OurServices from "./Pages/OurServices";
import OurOffers from "./Pages/OurOffers";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="SignIn" element={<SignIn />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Personalpage" element={<Personalpage />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Blogs" element={<Blogs />} />
        <Route path="OurServices" element={<OurServices />} />
        <Route path="OurOffers" element={<OurOffers />} />
        <Route path="BookFlight" element={<BookFlight />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
