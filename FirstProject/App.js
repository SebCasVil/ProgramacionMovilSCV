import { Provider } from 'react-redux'
import { store } from './src/app/store';
import Principal from './Principal';

export default function App() {


  return (
    <Provider store={store}>
      <Principal/>
    </Provider>
  );
}

