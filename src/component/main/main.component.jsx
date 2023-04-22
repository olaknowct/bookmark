import { FeatureProvider } from '../../context/features.context';
import Extensions from '../extensions/extensions.component';
import Faqs from '../faqs/faqs.component';
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
      <Faqs />
    </main>
  );
};
export default Main;
