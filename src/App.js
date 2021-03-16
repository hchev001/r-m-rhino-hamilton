import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { PostDummyData } from "./modules/dummy/actions";
function App() {
  const dispatch = useDispatch();
  const dummy = useSelector((state) => state.fake);

  useEffect(() => {
    console.log(dummy);
  });
  return (
    <div>
      <header>
        <h3>{dummy.name}</h3>
        <h3>{dummy.age}</h3>
      </header>
      <button
        onClick={() => dispatch(PostDummyData({ name: "Vidya", age: 11 }))}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
