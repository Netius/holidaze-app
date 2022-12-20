import NavigationBar from './components/navigation/navigation-bar';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
      <div className='wrapper'>
        <NavigationBar />
        <header className="container-fluid">
          <h1>HOLIDAZE</h1>
        </header>
      </div>
      <Footer />
    </>
  );
}

export default App;
