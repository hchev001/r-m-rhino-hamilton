import background from "../assets/images/Background.png";
export const FullLayout = (props) => {
  return (
    <div
      className="bg-fixed bg-black bg-opacity-80 h-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      {props.children}
    </div>
  );
};
