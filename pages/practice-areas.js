import Link from 'next/link'

import Layout from '../components/layout/Layout'
import { getFederalPractices } from './../lib/api'

export default function PracticeArea({ practices }) {
  return (
    <div>
      <section className='bg-hero-career pt-40 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Want Help</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    practice areas
                  </h2>
                </div>
                <div className='text-center pt-16 before:absolute before:right-0 before:left-0 before:top-5 before:w-0.5 before:h-8 before:m-auto before:bg-primary relative'>
                  <ul className='flex justify-center py-4 px-0 text-sm'>
                    <li className=''>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className='before:content-["/"] before:py-0 before:px-4'>
                      <Link href='/practice-areas'>Practice Areas</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-16 pb-10 lg:pt-28 lg:pb-28'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Want Help</h4>
                <h2 className='text-2xl uppercase'>practice areas</h2>
              </div>
            </div>
          </div>
          <div className='row my-28'>
            {practices.map((practice) => (
              <div className='col-md-6 col-lg-4 md:!pl-0 md:!pr-0 mb-0 md:mb-8 lg:mb-0'>
                <div className='border h-full px-8 py-[70px] mb-[-1px] mr-[-1px] hover:bg-primary hover:text-white group'>
                  <Link href='/practice/[slug]' as={`/practice/${practice.slug}`} legacyBehavior>
                    <a className='flex flex-col items-center justify-center'>
                      <img src={`/icons/${practice.slug}.png`} className='w-16 block' />
                      <div className='h-1 w-14 bg-primary group-hover:bg-black mt-4'></div>
                      <h2 className='text-xl mt-6 mb-2'>{practice.title.rendered}</h2>
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

PracticeArea.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Our Practices - Federal Law Firm'
      page='practice-areas'
      canonical='https://federallawfirm.af/practice-areas/'
      pageDescription='Federal Law Firm provides full service to its Clients. Corporate Law, International Trade Law, Business Law, Criminal Law, Government Affairs, Mining, Oil and Gas, Construction Litigation, Injury and Health Care, Taxation Law, Employment and Labor'
    >
      {page}
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const practices = await getFederalPractices()
  return {
    props: {
      practices,
    },
  }
}
