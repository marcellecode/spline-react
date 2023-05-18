import logo from "./logo.svg";
import "./App.css";
import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="spline">
      <Spline scene="https://prod.spline.design/ARZRwPxk23aAQlzZ/scene.splinecode" />
    </div>
  );
}

export default App;
