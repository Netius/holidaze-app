import NavigationBar from './components/navigation/navigation-bar';
import Footer from './components/footer/footer';
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <div className='wrapper'>
          <NavigationBar />
        </div>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
