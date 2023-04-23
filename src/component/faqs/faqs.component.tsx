import { useContext } from 'react';
import { FaqsContext } from '../../context/faqs.context';
// import { ReactComponent as ArrowDown } from '../../images/icon-arrow.svg';
import ArrowDown from '../../images/icon-arrow.svg';

const Faqs = () => {
  const { faqs, activeIndex, setActiveIndex } = useContext(FaqsContext);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) return setActiveIndex(-1);
    setActiveIndex(index);
  };

  return (
    <section>
      <div className='flex flex-col flex-wrap gap-[1.6rem] px-[5rem] pb-[14.8rem] pt-[15.6rem] text-center'>
        <h2>Frequently Asked Questions</h2>
        <p className='section-p-default leading-[2.8rem] tracking-[0.002rem]'>
          Here are some of our FAQs. If you have any other questions you'd like answered please feel
          free to email us.
        </p>
        <ul className='group mx-auto mt-[4.1rem] w-[40rem] text-veryDarkBlue md:w-[54.2rem]'>
          {faqs.map(({ Q, A }, index) => (
            <li key={index} className='group-hover:hover-li border-b first:border-t'>
              <div
                className='flex cursor-pointer items-center justify-between  pr-[2.4rem]'
                onClick={toggleAccordion.bind(null, index)}
              >
                <h3 className='pb-[1.7rem]  pt-[2rem] text-[2rem] tracking-[-0.1rem]'>{Q}</h3>
                <img
                  src={ArrowDown}
                  alt='Arrow Down'
                  className={`transition-transform  duration-500 ${
                    activeIndex === index ? 'soft-red-filter -rotate-180' : 'rotate-0'
                  }`}
                />
                {/* <ArrowDown
                  className={`text-cyan-500 transition duration-500 ${
                    activeIndex === index ? '-rotate-180 ' : 'rotate-0'
                  }`}
                  style={{ fill: 'red' }}
                /> */}
              </div>

              {activeIndex === index && (
                <div className={`max-w-[50rem] p-[2rem] pl-[2rem] text-left `}>
                  <p className='text-[1.6rem] opacity-50 group-hover:text-black'>{A}</p>
                </div>
              )}
            </li>
          ))}

          <button className='btn-primary mt-[4.9rem]'>More Info</button>
        </ul>
      </div>
    </section>
  );
};

export default Faqs;

// 51.8
