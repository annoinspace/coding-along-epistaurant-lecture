import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomNavbar from "./components/CustomNavbar"
import Home from "./components/Home"
import ReservationList from "./components/ReservationList"

import ReservationForm from "./components/ReservationForm"
import NotFound from "./components/NotFound"
import Menu from "./components/Menu"
// you're going to use curly brackets in an import statement if
// the thing you're importing has not been exported as default
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PastaDetails from "./components/PastaDetails"

// BrowserRouter is the outer wrapper of our routing system
// Just wrap EVERYTHING into it, since it allows router features
// to be available to the components inside. It is not providing anything
// visible to your App, so be generous :)

// Routes is a container for Route components. It should delimit the
// areas of your page that you want to conditionally render upon
// URLS in the address bar! The parts of the page that are not supposed
// to be hidden on some routes, like the navbar, like a footer, should
// not be wrapped inside Routes

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* props names can be anything; but if the value is anything else
      than a string, you have to delimit it with {} */}
        <CustomNavbar subtitle="Best pastas on the Internet!" />
        {/* I'm likely to invoke Home here later */}
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ReservationForm />} path="/booking" />
          <Route element={<ReservationList />} path="/admin" />
          <Route element={<Menu />} path="/menu" />
          <Route element={<PastaDetails />} path="/details/:pastaId" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
