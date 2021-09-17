import Main from "components/atoms/Main/Main";
import { FC } from "react";
import Router from "routes/Router";
import Header from "../Header/Header";
import Providers from "../Providers/Providers";

const App:FC = () => {
  return (
    <Providers>
      <Header />
      <Router />
    </Providers>
  );
}

export default App;
