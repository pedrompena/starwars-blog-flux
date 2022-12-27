import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Context
import injectContext from "./store/appContext";

//Views
import { Home } from "./views/Home";
import { Films } from "./views/Films";
import { FilmsDetails } from "./views/FilmsDetails";
import { People } from "./views/People";
import { PeopleDetails } from "./views/PeopleDetails";
import { Planets } from "./views/Planets";
import { PlanetsDetails } from "./views/PlanetsDetails";
import { Species } from "./views/Species";
import { SpeciesDetails } from "./views/SpeciesDetails";
import { Starships } from "./views/Starships";
import { StarshipsDetails } from "./views/StarshipsDetails";
import { Vehicles } from "./views/Vehicles";
import { VehiclesDetails } from "./views/VehiclesDetails";

//Components
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/films/:filmID" element={<FilmsDetails />} />
          <Route path="/characters" element={<People />} />
          <Route path="/characters/:peopleID" element={<PeopleDetails />} />
          <Route path="/planets" element={<Planets />} />
          <Route path="/planets/:planetID" element={<PlanetsDetails />} />
          <Route path="/species" element={<Species />} />
          <Route path="/species/:specieID" element={<SpeciesDetails />} />
          <Route path="/starships" element={<Starships />} />
          <Route path="/starships/:starshipID" element={<StarshipsDetails />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/vehicles/:vehicleID" element={<VehiclesDetails />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
