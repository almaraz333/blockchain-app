import { Navbar, Footer, Services, Transactions } from './components';
import { Welcome } from './views/Welcome';

const App = () => {
  return (
    <div className="min-h-screen ">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
