import { FaqsProvider } from '../../context/faqs.context';
import { FeatureProvider } from '../../context/features.context';
import CallToAction from '../cta/cta.component';
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
      <FaqsProvider>
        <Faqs />
      </FaqsProvider>
      <CallToAction />
    </main>
  );
};
export default Main;
