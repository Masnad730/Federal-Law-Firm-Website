import Link from 'next/link'
import HelpArea from '../components/HelpArea'

import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'

export default function About() {
  return (
    <div>
      <section className='bg-hero-career pt-40 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Our History</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    about us
                  </h2>
                </div>
                <div className='text-center pt-16 before:absolute before:right-0 before:left-0 before:top-5 before:w-0.5 before:h-8 before:m-auto before:bg-primary relative'>
                  <ul className='flex justify-center py-4 px-0 text-sm'>
                    <li className=''>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className='before:content-["/"] before:py-0 before:px-4'>
                      <Link href='/about'>About Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-16 pb-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Hello</h4>
                <h2 className='text-base md:text-2xl uppercase'>welcome to federal law firm</h2>
              </div>
              <div className='pl-24 pt-4'>
                <p className='text-accents_6'>
                  Federal Law Firm comprises of a diverse group of lawyers uniquely positioned to
                  provide a broad range of legal services.
                </p>
              </div>
            </div>
          </div>
          <div className='row pt-20 pb-0 md:pb-6 lg:pb-24'>
            <div className='col-lg-4'>
              <div className='mb-20'>
                <div className='flex justify-between'>
                  <h3 className='text-xl mb-4'>Values</h3>
                  <span className=' font-lato  text-accents_4 text-6xl'>01.</span>
                </div>
                <p className='text-accents_6 pt-5 lg:h-[134px]'>
                  We employ the best professional and technical resources and commit ourselves to
                  the highest ethical standards and fundamental values of respect for the rule of
                  law in order to provide the most effective experience for our clients.
                </p>
                <div className='flex mt-5 text-sm'>
                  More
                  <i className='flaticon-arrow-pointing-to-right ml-2 text-xs text-tertiary'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-20'>
                <div className='flex justify-between'>
                  <h3 className='text-xl mb-4'>History</h3>
                  <span className=' font-lato  text-accents_4 text-6xl'>02.</span>
                </div>
                <p className='text-accents_6 pt-5 lg:h-[134px]'>
                  Federal law Firm is a full-service corporation based in Kabul, Afghanistan with
                  Afghan licensed attorney representing prominent international and national
                  clients.
                </p>
                <div className='flex mt-5 text-sm'>
                  More
                  <i className='flaticon-arrow-pointing-to-right ml-2 text-xs text-tertiary'></i>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='mb-20'>
                <div className='flex justify-between'>
                  <h3 className='text-xl mb-4'>Mission</h3>
                  <span className=' font-lato  text-accents_4 text-6xl'>03.</span>
                </div>
                <p className='text-accents_6 pt-5 lg:h-[134px]'>
                  We are dedicated to providing professional services consistent with experiences
                  and expectations of our sophisticated domestic and international clients.
                </p>
                <div className='flex mt-5 text-sm'>
                  More
                  <i className='flaticon-arrow-pointing-to-right ml-2 text-xs text-tertiary'></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HelpArea />
      <CallToAction />
    </div>
  )
}

About.getLayout = function getLayout(page) {
  return (
    <Layout
      title='About Us - Federal Law Firm'
      page='about'
      canonical='https://federallawfirm.af/about/'
      pageDescription='In Federal Law Firm, we are aiming to provide high quality legal consultancy, support and results for your legal issues.'
    >
      {page}
    </Layout>
  )
}
