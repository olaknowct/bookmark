import Tablist from '../tablist/tablist.component';
import Tabpanel from '../tabpanel/tabpanel.component';

const Features = () => {
  return (
    <section>
      <div className='flex flex-col gap-[1.8rem] pt-[11rem] text-center'>
        <h2>Features</h2>
        <p className='mx-auto max-w-[54rem] text-[1.8rem] opacity-50'>
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
