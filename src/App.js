import { CssBaseline } from '@mui/material';
import { AxiosInterceptor } from './utils/axios-interceptor'
// project import
import './App.css';
import { AuthProvider } from './context/auth-context';
import Routes from './routes';
const App = () => {
  return (
    <AxiosInterceptor>
      <CssBaseline />
      {/* <NavigationScroll> */}
        <AuthProvider>
          <Routes />
        </AuthProvider>
      {/* </NavigationScroll> */}
    </AxiosInterceptor >
  );
}

export default App;
