import logo from './logo.svg';
import './App.css';
import Name from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import ProfilePhoto from './Component/Profile/ProfilePhoto';



function App() {
  return (
    <div className="App">
    <ProfilePhoto/>
    <Name/>
    <Address/> 
    

    </div>
  );
}

export default App;
