import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import GlobalStyles from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { ThemeName, themes } from "./styles/themes";

export default function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <Header themeName={themeName} setThemeName={setThemeName} />
      <Home />
      <Footer />
      <GlobalStyles />
    </ThemeProvider>
  )
}

