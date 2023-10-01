import React from 'react';
import { useState } from "react";
import { Routes, Route, useNavigate} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Environment from "./scenes/Environment";
import EnvironmentDetail from "./scenes/Environment/EnvironmentDetail"
import Gateways from "./scenes/gateways";
import Beacons from "./scenes/beacons";
import Position from "./scenes/position";
import PositionA from "./scenes/postionall";
<<<<<<< HEAD
import Temperature from "./scenes/linedate";
=======
>>>>>>> e3fe1f3e2d6036549943ac4022aecdf33536681b
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import MapPage from './scenes/position/MapPage';
<<<<<<< HEAD
=======

>>>>>>> e3fe1f3e2d6036549943ac4022aecdf33536681b

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/environment" element={<Environment />} />
              <Route path="/gateways" element={<Gateways />} />
              <Route path="/environmentDetail/:id" element={<EnvironmentDetail />} />
              <Route path="/beacon" element={<Beacons  />} />
              <Route path="/position" element={<Position  />} />
              <Route path="/positionall" element={<PositionA  />} />
<<<<<<< HEAD
              <Route path="/temperature" element={<Temperature  />} />
=======
>>>>>>> e3fe1f3e2d6036549943ac4022aecdf33536681b
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/map" element={<MapPage />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
