import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import ResultsPage from "./pages/ResultsPage";
import SignUp from "./pages/SignUp";
import TestPage from "./pages/TestPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}>
            <Route index element={<Login />} />
            {/* <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route> */}
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<HomePage />} />
          <Route path="test-page" element={<TestPage/>} />
          <Route path="results-page" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
