import s2 from "../../assets/images/s2.jpg";
import s4 from "../../assets/images/s4.webp";
import s6 from "../../assets/images/s6.jpg";
import s13 from "../../assets/images/s13.jpg";

/**
 *
 * @returns Random Photo used for the Episode Cover
 */
export const ReturnRandomCover = () => {
  const covers = [s2, s4, s6, s13];
  return covers[Math.floor(Math.random() * covers.length)];
};
