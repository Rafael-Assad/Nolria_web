import { useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PortifolioMenu from "./components/PortifolioMenu"
import Routes from "./routes";

import { AppContainer, MainContainer } from "./styles/appStyles";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const location = useLocation()

  const currentPage = location.pathname

  return (
    <AppContainer>
      <GlobalStyle/>

      <Header/>

      {currentPage === "/portifolio" && <PortifolioMenu/>}

    <MainContainer>
      <Routes/>
    </MainContainer>

      <Footer/>
    </AppContainer>
  );
}

export default App;
