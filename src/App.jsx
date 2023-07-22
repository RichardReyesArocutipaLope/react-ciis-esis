import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Home } from './views/Home';

export const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Provider store={store}>
          <AppRoute />
        </Provider>
      </BrowserRouter> */}
      <Home />
    </>
  );
};
