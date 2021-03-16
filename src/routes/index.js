import { CharacterPage } from "../pages/character";
import { EpisodePage } from "../pages/episode";
import { HomePage } from "../pages/home";

export const IndexRoutes = [
  { path: "/episodes", name: "Episode", component: EpisodePage },
  { path: "/characters", name: "Character", component: CharacterPage },
  { path: "/", name: "Home", component: HomePage },
];
