import Home from "../pages/Home/Home.jsx";
import Gallery from "../pages/Gallery/Gallery.jsx";
import InteractiveGame from "../pages/InteractiveGame.jsx";

export const routes = {
  home: {
    url: "/",
    component: Home,
  },
  gallery: {
    url: "/galeria",
    component: Gallery,
  },
  interactive_game: {
    url: "/gra-interaktywna",
    component: InteractiveGame,
  },
};
