import { useContext } from 'react';
import { FaqsContext } from '../../context/faqs.context';
import { ReactComponent as ArrowDown } from '../../images/icon-arrow.svg';

const Faqs = () => {
  const { faqs, activeIndex, setActiveIndex } = useContext(FaqsContext);

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) return setActiveIndex(-1);
    setActiveIndex(index);
  };

  return (
    <section>
      <div className='mt-[12.3rem] flex flex-col gap-[1.6rem] pt-[3.3rem] text-center'>
        <h2>Frequently Asked Questions</h2>
        <p className='section-p-default leading-[2.8rem] tracking-[0.002rem]'>
          Here are some of our FAQs. If you have any other questions you'd like answered please feel
          free to email us.
        </p>
        <ul className='mx-auto mt-[4.1rem] w-[54.2rem] text-veryDarkBlue'>
          {faqs.map(({ Q, A }, index) => (
            <li className=' border-b first:border-t'>
              <div
                className='flex cursor-pointer items-center justify-between  pr-[2.4rem]'
                onClick={toggleAccordion.bind(null, index)}
              >
                <h3 className='pb-[1.7rem]  pt-[2rem] text-[2rem] tracking-[-0.1rem]'>{Q}</h3>
                <ArrowDown
                  className={`transition duration-500 ${
                    activeIndex === index ? '-rotate-180' : 'rotate-0'
                  }`}
                />
              </div>

              {activeIndex === index && (
                <div className={`max-w-[50rem] p-[2rem] pl-[2rem] text-left `}>
                  <p className='text-[1.6rem] opacity-50'>{A}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Faqs;

// 51.8
