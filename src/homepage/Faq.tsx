import React, {useState} from 'react'

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: 'Can I Hire a Driver',
      answer:"We offer a variety of driver services, including personal chauffeurs, designated drivers, and delivery drivers."  ,
      open: false,
    },
    {
      question: 'Can i rent a car for a week?',
      answer:
        'Yes, we offer weekly car rentals. Please visit our rental page or contact us for pricing and availability.',
      open: false,
    },
    {
      question: 'is Hosting an included Service',
      answer:
        'If you provide car hosting support, outline the scope of the service and if there are different pricing tiers.',
      open: false,
    },
    {
      question: 'What are the job opportunties available as a driver',
      answer:
        'For a full list of current opportunities, please visit our careers page',
      open: false,
    },
  ])

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open
        } else {
          item.open = false
        }

        return item
      }),
    )
  }

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            These are our most frequently asked questions and we are here to
            answer them for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50 "
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 "
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {' '}
                  {item.question}{' '}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    item.open ? 'rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${
                  item.open ? 'block' : 'hidden'
                } px-4 pb-5 sm:px-6 sm:pb-6`}
              >
                <p dangerouslySetInnerHTML={{__html: item.answer}}></p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{' '}
          <a
            href="#"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </a>
        </p>
      </div>
    </section>
  )
}

export default Faq
