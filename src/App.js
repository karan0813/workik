import './App.css';
import Navbar from './Comp/Navbar';
import LeftBlock from './Comp/LeftBlock';
import RightBlock from './Comp/RightBlock';

function App() {
  return (
    <div  >
      <Navbar/>
      <div className="lg:flex ">
        <LeftBlock/>     
        <RightBlock/>
      </div>
      
    </div>
  );
}

export default App;
