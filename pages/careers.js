import Link from 'next/link'

import Layout from '../components/layout/Layout'

export default function Careers() {
  return (
    <div>
      <section className='pt-40 pb-32 bg-hero-career'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Our History</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    careers
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
      <section className='pt-32 pb-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Career</h4>
                <h2 className='text-base md:text-2xl uppercase'>all about federal law firm</h2>
              </div>
              <div className='pl-24 pt-4'>
                <p className='text-accents_6'>
                  At our Federal advocates, we are always looking for high quality members for our
                  team. If you have the skills and desire to make a contribution to our team, please
                  send us a copy of your CV and a cover letter explaining why you would like to join
                  us and what you can bring to our practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-fun-facts pb-20'>
        <div className='container'>
          <div className='row pb-16 pt-14'>
            <div className='col-lg-6 text-white'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Fun Facts</h4>
                <h2 className='text-base md:text-2xl uppercase'>federal law firm in numbers</h2>
              </div>
              <div className='pl-24 pt-4'>
                <p className='text-accents_4'>
                  Federal Law Firm comprises of a diverse group of lawyers uniquely positioned to
                  provide a broad range of legal services.
                </p>
              </div>
            </div>
          </div>
          <div className='row border lg:border-0 !mx-1.5 !lg:mx-0'>
            <div className='col-md-6 col-lg-3 lg:!pl-0 lg:!pr-0 border-r'>
              <div className='lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5 text-white'>
                <div className=''>
                  <span className='block text-4xl lg:text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    10+
                  </span>
                  <span className='block'>Qualified Lawyers</span>
                </div>
                <div className=''>
                  <img src='/icons/lawyer.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 lg:!pl-0 lg:!pr-0'>
              <div className='lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5 text-white'>
                <div className=''>
                  <span className='block text-4xl lg:text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    300+
                  </span>
                  <span className='block'>Trusted Clients</span>
                </div>
                <div className=''>
                  <img src='/icons/client.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 lg:!pl-0 lg:!pr-0 border-r'>
              <div className='lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5 text-white'>
                <div className=''>
                  <span className='block text-4xl lg:text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
                    100+
                  </span>
                  <span className='block'>Successful Cases</span>
                </div>
                <div className=''>
                  <img src='/icons/cases.png' alt='' className='w-16 grayscale' />
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-3 lg:!pl-0 lg:!pr-0'>
              <div className='lg:border mr-[-1px] mb-[1px] flex items-center justify-between py-6 px-5 text-white'>
                <div className=''>
                  <span className='block text-4xl lg:text-xl font-bold pt-3 before:absolute before:top-0 before:left-0 before:h-1 before:w-6 before:bg-accents_5 relative'>
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
    </div>
  )
}

Careers.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Careers - Federal Law Firm'
      page='careers'
      canonical='https://federallawfirm.af/careers/'
      pageDescription='At our Federal advocates, we are always looking for high-quality members for our team. If you have the skills and desire to make a contribution to our team, please send us a copy of your CV and a cover letter'
    >
      {page}
    </Layout>
  )
}
