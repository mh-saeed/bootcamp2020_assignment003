
import './App.css';
import Student from './students';

function App() {
  let x=1;
  return (
    <div className="App" >
      <Student firstStudentName={"Muhammad Saeed"} dish={"Beef Biryani"} age={"21"} stdNo={x++} />
<hr/>
      <Student firstStudentName={"Muhammad Hassan"} dish={"Chicken Karahi"} age={"22"} stdNo={x++} />

    </div>


  );
}

export default App;
