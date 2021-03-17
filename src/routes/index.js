import { CharacterPage } from "../pages/character";
import { EpisodePage } from "../pages/episode";
import { FavoritePage } from "../pages/favorite";
import { HomePage } from "../pages/home";

export const IndexRoutes = [
  { path: "/episodes", name: "Episode", component: HomePage },
  { path: "/characters", name: "Character", component: CharacterPage },
  { path: "/favorites", name: "Favorites", component: FavoritePage },
  { path: "/", name: "Home", component: HomePage },
];
