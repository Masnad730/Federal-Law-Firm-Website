import Link from 'next/link'

import Layout from '../../components/layout/Layout'
import { getFederalPractices } from '../../lib/api'
import PracticesSidebarNav from '../../components/PracticesSidebarNav'

export default function SinglePractice({ practice, allPractices }) {
  return (
    <div>
      <section className='bg-[url("/images/slide1.jpg")] bg-fixed bg-no-repeat bg-cover bg-center pt-40 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Legal Area</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    {practice.title.rendered}
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
                    <li className='before:content-["/"] before:py-0 before:px-4'>
                      <Link href='/practice/[slug]' as={`/practice/${practice.slug}`}>
                        {practice.title.rendered}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='py-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 order-2 order-lg-1'>
              <PracticesSidebarNav selectedPractice={practice} allPractices={allPractices} />
            </div>
            <div className='col-lg-8 order-1 order-lg-2'>
              <div className=''>
                <div className='h-auto md:h-80 mb-12'>
                  <img
                    className='w-full h-full object-cover'
                    src={practice.acf.practice_image.url}
                    alt={practice.acf.area}
                  />
                </div>
                <div className='mb-4 md:mb-2'>
                  <span className='inline-block text-base md:text-lg font-bold'>Overview:</span>
                </div>
                <div className='whitespace-pre-wrap'>
                  <div
                    className='dashed text-accents_6'
                    dangerouslySetInnerHTML={{ __html: practice.acf.practice_description }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

SinglePractice.getLayout = function getLayout(page, { practice }) {
  return (
    <Layout
      title={`${practice.title.rendered} - Federal Law Firm`}
      page={practice.slug}
      canonical={`https://federallawfirm.af/practices/${practice.slug}`}
      pageDescription={practice.acf.practice_description.substring(0, 160)}
    >
      {page}
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const allPractices = await getFederalPractices()
  const paths = allPractices.map((practice) => ({
    params: { slug: practice.slug },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allPractices = await getFederalPractices()
  return {
    props: {
      practice: allPractices.find((practice) => practice.slug === params.slug) || {},
      allPractices,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    //revalidate: 10, // In seconds
  }
}
