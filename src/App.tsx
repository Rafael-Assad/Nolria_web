import Footer from "./components/Footer";
import Header from "./components/Header";
import { AppContainer } from "./styles/appStyles";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Header/>
      <Footer/>
    </AppContainer>
  );
}

export default App;
