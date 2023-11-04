
import './App.css';

function App() {
  const [name, setName] = useState("Rio")
  return (
    //beginnning of fragment
    <div className="App">
      <h1>{name}</h1>
    </div>//end of fragment

    //react fragments arebasically the group of code thats here..you cant have more than one fragments..you can also do <React.fragment/>but you cant use css withit..basically it 

    //stateless vs stateful componets 
    //a stateless componenet is a componnent with no state variables example(<div className="App">
      //<h1>hello to fragments</h1>
     // </div>)) whie stateful is one with state like the code above

  );
}

export default App;
