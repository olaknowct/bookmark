import { FeatureProvider } from '../../context/features.context';
import Extensions from '../extensions/extensions.component';
import Features from '../features/features.component';
import Hero from '../hero/hero.component';

const Main = () => {
  return (
    <main className='relative overflow-hidden'>
      <Hero />
      <FeatureProvider>
        <Features />
      </FeatureProvider>
      <Extensions />
    </main>
  );
};
export default Main;
