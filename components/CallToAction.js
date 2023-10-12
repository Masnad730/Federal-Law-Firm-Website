import { useState } from 'react'
import Link from 'next/link'
import { useSnackbar } from 'notistack'
import ClipLoader from 'react-spinners/ClipLoader'

import { submitUserEnquiry } from '../lib/api'

const CallToAction = () => {
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
    <section className='pt-12 pb-20 bg-[url("/images/overlay-min.png")] bg-no-repeat bg-cover'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 text-white'>
            <div className='pl-24 before:absolute before:top-1/2 before:left-0 before:w-[70px] before:h-0.5 before:bg-primary relative'>
              <h4 className='mt-5 mb-2.5 font-playfair'>Don't Hesitate To Ask</h4>
              <h2 className='text-base md:text-2xl  uppercase'>free consultation</h2>
            </div>
            <div className='pl-24 pt-4'>
              <p className='text-accents_5'>
                Feel free to get in touch with any enquiries and one of our friendly members of
                staff will get back to you as soon as possible, we are here to help !
              </p>
            </div>
          </div>
          <div className='col-12'>
            <div className='bg-white py-8 mt-20 mb-2'>
              <form onSubmit={handleSubmit}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-4'>
                      <input
                        type='text'
                        name='name'
                        value={userInfo.name}
                        onChange={handleChange}
                        required
                        placeholder='YOUR NAME'
                      />
                    </div>
                    <div className='col-md-4'>
                      <input
                        type='email'
                        name='email'
                        value={userInfo.email}
                        onChange={handleChange}
                        required
                        placeholder='YOUR EMAIL'
                      />
                    </div>
                    <div className='col-md-4'>
                      <input
                        type='text'
                        name='caseSubject'
                        value={userInfo.caseSubject}
                        onChange={handleChange}
                        required
                        placeholder='SUBJECT'
                      />
                    </div>
                    <div className='col-lg-12 mt-5'>
                      <textarea
                        name='message'
                        value={userInfo.message}
                        onChange={handleChange}
                        required
                        id=''
                        cols='30'
                        rows='7'
                        placeholder='CASE DETAILS'
                      ></textarea>
                    </div>
                    <div className='col-lg-12'>
                      <div className=''>
                        <button className='border border-accents_4 bg-tertiary text-white text-sm px-12 uppercase'>
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
          </div>
        </div>
      </div>
    </section>
  )
}
export default CallToAction
