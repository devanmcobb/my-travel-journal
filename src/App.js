import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import data from './data'



function App() {
  return (

    <div className="">
      <Header />

      {data.map((item => (
        <Cards
          key={item.id}
          item={item}
        />
      )))}

    </div>
  );
}

export default App;
