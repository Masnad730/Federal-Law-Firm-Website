import Link from 'next/link'

import Layout from '../components/layout/Layout'

export default function Team() {
  return (
    <div>
      <section className='bg-hero-career pt-40 pb-32'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Our Legal Team</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    our team
                  </h2>
                </div>
                <div className='text-center pt-16 before:absolute before:right-0 before:left-0 before:top-5 before:w-0.5 before:h-8 before:m-auto before:bg-primary relative'>
                  <ul className='flex justify-center py-4 px-0 text-sm'>
                    <li className=''>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className='before:content-["/"] before:py-0 before:px-4'>
                      <Link href='/team'>Our Team</Link>
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
                <h4 className='mt-5 mb-2.5 font-playfair'>Our Team</h4>
                <h2 className='text-base md:text-2xl uppercase'>federal law firm team</h2>
              </div>
              <div className='pl-12 md:pl-24 pt-4'>
                <p className='text-accents_6'>
                  Our team is comprised of internationally trained and Afghan attorneys, tax and
                  corporate consultants, as well as Afghan government relations specialists. They
                  have held important positions in the public and private sectors, including with
                  the government of Afghanistan, law firms and international organizations and are
                  uniquely positioned to provide a broad range of specialized legal services to
                  international and domestic clients. We keep track of Afghanistan’s ever changing
                  regulatory and legal developments. This enables us to advise and represent our
                  clients to conduct their commercial affairs confidently and safely in
                  Afghanistan’s fast-paced and growing market. Our close engagement with the Afghan
                  and international institutions allows us to assist our clients effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

Team.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Our Team - Federal Law Firm'
      page='team'
      canonical='https://federallawfirm.af/team/'
      pageDescription='Our team comprises internationally trained Afghan attorneys, tax and corporate consultants, and Afghan government relations specialists. They have held important positions in the public and private sectors'
    >
      {page}
    </Layout>
  )
}
