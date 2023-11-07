import "./App.css";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";
function App() {
  const user = {
    name: "Amine",
    imageUrl:
      "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png",
  };

  return (
    <div className="App">
      <Navigation />
      <p>Hello </p>
      <Profile name={user.name} imageUrl={user.imageUrl} />
    </div>
  );
}

export default App;
