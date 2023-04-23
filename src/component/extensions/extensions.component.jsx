import Extension from '../extension/extension.component';

const Extensions = () => {
  return (
    <section>
      <div className='flex flex-col gap-[1.6rem]  text-center lg:pt-[3.3rem]'>
        <h2>Download the extension</h2>
        <p className='section-p-default leading-[2.8rem] tracking-[0.002rem]'>
          We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite
          you’d like us to prioritize.
        </p>
        <Extension />
      </div>
    </section>
  );
};

export default Extensions;
