import { FeatureProvider } from '../../context/features.context';
import Extension from '../extension/extension.component';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';

const Main = () => {
  return (
    <main className='relative overflow-hidden'>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
      <Extension />
    </main>
  );
};
export default Main;
