import Link from 'next/link'
import ProgressBar from '@ramonak/react-progress-bar'

import Layout from '../components/layout/Layout'
import CallToAction from '../components/CallToAction'
import HelpArea from '../components/HelpArea'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
  return (
    <div>
      <section>
        <HeroCarousel />
        <div className='container'>
          <div className='row pb-12 md:pb-20 lg:pb-0'>
            <div className='col-md-6 col-lg-3 md:!pl-0 md:!pr-0'>
              <div className='border border-t-0 border-b-0 lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5'>
                <div className=''>
                  <span className='block text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    10+
                  </span>
                  <span className='block'>Qualified Lawyers</span>
                </div>
                <div className=''>
                  <img src='/icons/lawyer.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 md:!pl-0 md:!pr-0'>
              <div className='border border-t-0 border-b-0 lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5'>
                <div className=''>
                  <span className='block text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    300+
                  </span>
                  <span className='block'>Trusted Clients</span>
                </div>
                <div className=''>
                  <img src='/icons/client.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 md:!pl-0 md:!pr-0'>
              <div className='border border-t-0 border-b-0 md:border-b lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5'>
                <div className=''>
                  <span className='block text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    100+
                  </span>
                  <span className='block'>Successful Cases</span>
                </div>
                <div className=''>
                  <img src='/icons/cases.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 md:!pl-0 md:!pr-0'>
              <div className='border border-t-0 border-b lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5'>
                <div className=''>
                  <span className='block text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    8+
                  </span>
                  <span className='block'>Honors & Awards</span>
                </div>
                <div className=''>
                  <img src='/icons/awards.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-24 pb-12 bg-accents_1 lg:bg-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Hello</h4>
                <h2 className='text-lg md:text-2xl uppercase'>all about federal law firm</h2>
              </div>
              <div className='pl-24 pt-4'>
                <p className='text-accents_6'>
                  Federal Law Firm comprises of a diverse group of lawyers uniquely positioned to
                  provide a broad range of legal services.
                </p>
              </div>
            </div>
            <div className='col-md-6 flex md:justify-end items-center pt-14 md:pt-0'>
              <div className='border border-accents_4 hover:text-white hover:bg-primary transition-all max-w-max px-6 py-4'>
                <Link href='/about' legacyBehavior>
                  <a>Find Out More About Us</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='row pt-10 md:pt-20 pb-6'>
            <div className='col-lg-8'>
              <div className='row'>
                <div className='col-md-6'>
                  <div>
                    <img src='/images/slide1.jpg' alt='' />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='pt-5 md:pt-0'>
                    <p>
                      We constantly develop and enhance our professional network and access
                      throughout the country and internationally. We work hard to maintain excellent
                      professional relationships with justice sector officials and with governmental
                      and non-governmental institutions through our professional and standard
                      practice which has always added to our success in the legal services industry.
                      Federal law firm is distinguished from other legal firms by its close
                      relationship with lawyers from more than 100 countries in the world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-12 col-lg-4'>
              <div className='pt-12 lg:pt-0'>
                <div className='pb-4 last:pb-0'>
                  <span className='inline-block font-semibold text-xs uppercase'>Taxation Law</span>
                  <ProgressBar
                    completed={90}
                    height='4px'
                    bgColor='#4094C6'
                    labelAlignment='outside'
                    labelColor='#be3b45'
                    labelSize='15px'
                  />
                </div>
                <div className='pb-4 last:pb-0'>
                  <span className='inline-block font-semibold text-xs uppercase'>Criminal Law</span>
                  <ProgressBar
                    completed={80}
                    height='4px'
                    bgColor='#4094C6'
                    labelAlignment='outside'
                    labelColor='#be3b45'
                    labelSize='15px'
                  />
                </div>
                <div className='pb-4 last:pb-0'>
                  <span className='inline-block font-semibold text-xs uppercase'>Family Law</span>
                  <ProgressBar
                    completed={70}
                    height='4px'
                    bgColor='#4094C6'
                    labelAlignment='outside'
                    labelColor='#be3b45'
                    labelSize='15px'
                  />
                </div>
                <div className='pb-4 last:pb-0'>
                  <span className='inline-block font-semibold text-xs uppercase'>Business Law</span>
                  <ProgressBar
                    completed={80}
                    height='4px'
                    bgColor='#4094C6'
                    labelAlignment='outside'
                    labelColor='#be3b45'
                    labelSize='15px'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HelpArea />
      <section className='pt-28'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Want Help</h4>
                <h2 className='text-2xl uppercase'>practice areas</h2>
              </div>
            </div>
            <div className='col-md-6 flex md:justify-end items-center pt-14 md:pt-0'>
              <div className='border border-accents_4 hover:text-white hover:bg-primary max-w-max px-6 py-4'>
                <Link href='/practice-areas' legacyBehavior>
                  <a>View All Practice Areas</a>
                </Link>
              </div>
            </div>
          </div>
          <div className='row my-16 lg:my-28'>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/business-law.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>Business Law</h2>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/criminal-law.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>Criminal Law</h2>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/corporate-law.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>Corporate Law</h2>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/international-trade-law.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>International Trade Law</h2>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/taxation-law.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>Taxation Law</h2>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
              <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] flex flex-col items-center justify-center hover:bg-primary hover:text-white group'>
                <img src='/icons/employment-and-labor.png' className='w-16 block' />
                <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                <h2 className='text-xl mt-6 mb-2'>Employment and Labor</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pb-28'>
        <div className='container'>
          <div className='row pb-20'>
            <div className='col-md-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>They Trust Us</h4>
                <h2 className='text-2xl uppercase'>our partner</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6 col-lg-4'>
              <div>
                <div>
                  <a href='https://www.ip-coster.com/' target='_blank'>
                    <img src='/images/partners/ip-coster.png' height='320' width='320' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
              <div>
                <div>
                  <a href='https://www.praelegal.de/' target='_blank'>
                    <img src='/images/partners/praelegal.jpeg' height='320' width='320' />
                  </a>
                </div>
              </div>
            </div>
            <div className='col-sm-12 col-md-6 col-lg-4'>
              <div>
                <div>
                  <a href='https://www.debitura.com/partners/federal-law-firm' target='_blank'>
                    <img src='/images/partners/debitura.png' height='320' width='320' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Federal Law Firm'
      page='home'
      canonical='https://federallawfirm.af'
      pageDescription='Federal law Firm is a full-service law firm based in Kabul, Afghanistan with Afghan licensed attorney representing prominent international and national clients.'
    >
      {page}
    </Layout>
  )
}
