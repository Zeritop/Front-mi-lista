import BuscadorAnimeManga from './components/buscadorAnimeManga/BuscadorAnimeManga';
import { AppContainer } from './styles/AppStyles';
import Results from './components/Results';
import { useState } from 'react';

const App = () => {
  const [loadResult, setLoadResult] = useState(false)
  
  return (
    <AppContainer>
      <BuscadorAnimeManga setLoadResult={setLoadResult} />
      <Results loadResult={loadResult} />
    </AppContainer>

  );
}

export default App;
