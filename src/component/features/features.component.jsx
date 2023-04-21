import { useContext } from 'react';

import Tablist from '../tablist/tablist.component';
import Tabpanel from '../tabpanel/tabpanel.component';

const Features = () => {
  return (
    <section>
      <div className='pt-[11rem] text-center flex flex-col gap-[1.8rem]'>
        <h2>Features</h2>
        <p className='text-[1.8rem] mx-auto opacity-50 max-w-[54rem]'>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go
        </p>
        <Tablist />
        <Tabpanel />
      </div>
    </section>
  );
};
export default Features;
