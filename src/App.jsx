import BuscadorAnimeManga from './components/BuscadorAnimeManga';
import { AppContainer } from './styles/AppStyles';
import { Provider } from 'react-redux';
import store from './store';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  const [loadResult, setLoadResult] = useState(false)

  return (
    <Provider store={store} >
      <AppContainer>
        <BuscadorAnimeManga setLoadResult={setLoadResult} />
        <Results loadResult={loadResult} />
      </AppContainer>
    </Provider>
  );
}

export default App;
