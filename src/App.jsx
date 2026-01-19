import './App.css';
import { AuthProvider } from './context/AuthContext';
import { Login } from './components/Login';
import { Albums } from './components/Albums';
import { useAuth } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const { user } = useAuth();

  // Show Login if not authenticated
  if (!user) {
    return <Login />;
  }

  // Show main app if authenticated
  return <Albums />;
}

export default App;
