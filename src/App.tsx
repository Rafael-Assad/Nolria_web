import Header from "./components/Header";
import { AppContainer } from "./styles/appStyles";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle/>
      <Header/>
    </AppContainer>
  );
}

export default App;
