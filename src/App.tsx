import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <GlobalStyles />
    </>
  )
}

