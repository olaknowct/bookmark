import { FeatureProvider } from '../../context/features.context';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';

const Main = () => {
  return (
    <main className='relative overflow-hidden'>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
    </main>
  );
};
export default Main;
