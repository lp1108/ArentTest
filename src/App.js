import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { AxiosInterceptor } from './utils/axios-interceptor'
// project import
import logo from './logo.svg';
import './App.css';
import { AuthProvider } from './context/auth-context';
import NavigationScroll from './layout/NavigationScroll';
import Routes from './routes';
const App = () => {
  const dispatch = useDispatch();
  const customization = useSelector((state) => {
    return state.customization;
  });
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
