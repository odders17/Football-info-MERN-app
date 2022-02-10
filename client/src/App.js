import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { getApi } from "./utils/queries";

import TeamCard from "./components/Teams";
import Navbar from "./components/Navbar";

function App() {
  const { loading, data } = useQuery(getApi);
  console.log("data", data["getApi"]["apiKey"]);
  return (
    <Router>
      {/* <Navbar /> */}
      {loading ? "...Loading" : <TeamCard ApiKEy={data["getApi"]["apiKey"]} />}
    </Router>
  );
}

export default App;
