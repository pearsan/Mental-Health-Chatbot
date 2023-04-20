//parent components
import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Main from "./components/layouts/Main";
import TalkPage from "./pages/TalkPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/Talk" element={<TalkPage></TalkPage>}></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
