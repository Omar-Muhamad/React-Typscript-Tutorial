import './App.css';
import Childern from './components/Childern';
import Counter from './components/Counter';
import NameBadge from './components/name-badge';

const App = () => {
  return (
    <main className="application">
     {/* <NameBadge name='Omar' greeting='hello'/> */}
     {/* <Childern /> */}
     <Counter />
  </main>
  );
}

export default App;
