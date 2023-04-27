import Tablist from '../tablist/tablist.component';
import Tabpanel from '../tabpanel/tabpanel.component';

const Features = () => {
  return (
    <section>
      <div className='flex flex-col gap-[2.1rem] py-[9rem] pt-[11rem] text-center'>
        <h2>Features</h2>
        <p className='section-p-default leading-[2.7rem] tracking-[0.01rem]'>
          Our aim is to make it quick and easy for you to access your favourite websites. Your
          bookmarks sync between your devices so you can access them on the go.
        </p>
        <Tablist />
        <Tabpanel />
      </div>
    </section>
  );
};
export default Features;
