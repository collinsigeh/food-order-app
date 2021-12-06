import { Fragment } from "react";
import Header from "./modules/Layout/Header";
import Meals from "./modules/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header />
      <Meals />
    </Fragment>
  );
}

export default App;
