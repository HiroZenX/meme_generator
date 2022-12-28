import Header from "./Components/Header";
import Input from "./Components/Input";
import MemeContent from "./Components/MemeContent";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Input />
        <MemeContent />
      </div>
    </div>
  );
}

export default App;
