import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
// import Textform from "./Components/Textform";

function App() {
  let name:String="123value"
  return (
    <>
      {/* <Navbar title_page="Utils" navbar_link="about"/> */}
      <Navbar />
      <div className="container my-3">
      <Sidebar firstf={name} secondf="address"/>
      </div>
      
    </>
  );
}

export default App;