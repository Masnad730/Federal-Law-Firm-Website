import { useState } from 'react'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import ClipLoader from 'react-spinners/ClipLoader'

import { submitUserEnquiry } from '../lib/api'
import Layout from '../components/layout/Layout'

export default function Contact() {
  const { enqueueSnackbar } = useSnackbar()
  const [isLoading, setIsLoading] = useState(false)
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    caseSubject: '',
    message: '',
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }
  const handleSubmit = async (e) => {
    setIsLoading(true)
    e.preventDefault()
    submitUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar)
  }

  return (
    <div>
      <section className='pt-40 pb-32 bg-hero-contact'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='text-center text-white'>
                <div>
                  <p className='font-playfair'>Our History</p>
                  <h2 className='text-2xl md:text-3xl lg:text-5xl font-weight uppercase mt-5 mb-4'>
                    contact us
                  </h2>
                </div>
                <div className='text-center pt-16 before:absolute before:right-0 before:left-0 before:top-5 before:w-0.5 before:h-8 before:m-auto before:bg-primary-light relative'>
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
      <section className='pb-20 pt-16'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
                <h4 className='mt-5 mb-2.5 font-playfair'>Get In Touch</h4>
                <h2 className='text-base md:text-2xl uppercase'>contact us</h2>
              </div>
              <div className='pl-24 pt-4'>
                <p className='text-accents_6'>
                  Feel free to get in touch with any enquiries and one of our friendly members of
                  staff will get back to you as soon as possible, we are here to help !
                </p>
              </div>
            </div>
          </div>
          <div className='row pt-16'>
            <div className='col-sm-6 col-md-8'>
              <form onSubmit={handleSubmit}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <input
                        type='text'
                        name='name'
                        value={userInfo.name}
                        onChange={handleChange}
                        required
                        className='border border-accents_4'
                        placeholder='YOUR NAME'
                      />
                    </div>
                    <div className='col-lg-6'>
                      <input
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                        className='border border-accents_4'
                        placeholder='YOUR EMAIL'
                      />
                    </div>
                    <div className='col-lg-12'>
                      <input
                        type='text'
                        name='caseSubject'
                        value={userInfo.caseSubject}
                        onChange={handleChange}
                        required
                        className='border border-accents_4'
                        placeholder='SUBJECT'
                      />
                    </div>
                    <div className='col-lg-12'>
                      <textarea
                        name='message'
                        value={userInfo.message}
                        onChange={handleChange}
                        required
                        id=''
                        cols='30'
                        rows='10'
                        className='border border-accents_4'
                        placeholder='CASE DETAILS'
                      ></textarea>
                    </div>
                    <div className='col-lg-12'>
                      <div className=''>
                        <button
                          type='submit'
                          className='border border-accents_4 bg-tertiary text-white text-sm px-12 uppercase'
                        >
                          {!isLoading ? (
                            'submit'
                          ) : (
                            <ClipLoader color={'#fff'} loading={isLoading} size={30} />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-sm-6 col-md-4'>
              <div className='pt-16 md:pt-0'>
                <p className='text-accents_6'>
                  In Federal Law Firm, we are aiming to provide high quality legal consultancy,
                  support and results for your legal issues.
                </p>
                <div className='row mt-12'>
                  <div className='col-lg-6'>
                    <div className='flex flex-col'>
                      <span className='text-tertiary text-sm mb-2'>Phone:</span>
                      <span className='text-accents_6'>
                        <i className='fa fa-phone mr-3'></i>+93 781 938 546
                      </span>
                      <span className='text-accents_6'>
                        <i className='fa fa-phone mr-3'></i>
                        +93 786 06 01 01
                      </span>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='flex flex-col mt-6 lg:mt-0'>
                      <span className='text-tertiary text-sm mb-2'>Email:</span>
                      <span className='text-accents_6 flex items-center'>
                        <i className='fa fa-envelope mr-3'></i>
                        info@federallawfirm.af
                      </span>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className='flex flex-col pt-12 pb-12'>
                      <span className='text-tertiary text-sm mb-2'>Address:</span>
                      <span className='text-accents_6'>
                        <i className='fa fa-map-marker mr-3'></i>
                        Shahre Naw, Kabul, Afghanistan
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.595893666958!2d69.17065111553329!3d34.53846489939679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f41ecda4c57%3A0x80b830a4ef6c2e59!2sFederal%20Law%20Firm!5e0!3m2!1sen!2s!4v1673164307945!5m2!1sen!2s'
            width='100%'
            height='450'
            className='outline-none focus:outline-none rounded-lg'
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </section>
    </div>
  )
}

Contact.getLayout = function getLayout(page) {
  return (
    <Layout
      title='Contact Us - Federal Law Firm'
      page='contact'
      canonical='https://federallawfirm.af/contact/'
      pageDescription='Contact us. Shahre Naw, Kabul, Afghanistan | +93 781 938 546. info@federallawfirm.af'
    >
      {page}
    </Layout>
  )
}
