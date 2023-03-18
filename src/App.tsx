import './App.css';
import Childern from './components/Childern';
import NameBadge from './components/name-badge';

const App = () => {
  return (
    <main className="application">
     {/* <NameBadge name='Omar' greeting='hello'/> */}
     <Childern />
  </main>
  );
}

export default App;
