import Link from 'next/link'

const Footer = () => {
  return (
    <section className='bg-accents_4 py-20'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <div className='flex items-center lg:justify-center h-full'>
              <img src='/images/logo.png' alt='' width='193' className='mb-16 lg:mb-0' />
            </div>
          </div>
          <div className='col-lg-8'>
            <div>
              <div className='pb-7 lg:pb-14'>
                <h2 className='text-lg uppercase tracking-wide pb-2 hidden lg:block'>
                  federal law firm
                </h2>
                <p className='text-accents_6'>
                  We look forward to getting to know you and to helping you take your company to new
                  heights.
                </p>
              </div>
              <div className='row'>
                <div className='col-lg-9'>
                  <div className='pb-14'>
                    <nav>
                      <ul className='flex items-start uppercase'>
                        <li className='px-2 first:pl-0 text-sm'>
                          <Link href='/'>home</Link>
                        </li>
                        <li className='px-2 first:pl-0 text-sm'>
                          <Link href='/about'>about us</Link>
                        </li>
                        <li className='px-2 first:pl-0 text-sm'>
                          <Link href='/practice-areas'>practice areas</Link>
                        </li>

                        <li className='px-2 first:pl-0 text-sm'>
                          <Link href='/contact'>contact us</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className='col-lg-3'>
                  <div className='mb-3'>
                    <ul className='flex items-baseline lg:justify-between'>
                      <li className='mr-[30px] last:mr-0'>
                        <a
                          href='https://www.facebook.com/federallawfirm'
                          target='_blank'
                          rel='noreferrer'
                          className='text-sm'
                        >
                          <i className='fab fa-facebook-f'></i>
                        </a>
                      </li>
                      <li className='mr-[30px] last:mr-0'>
                        <a href='#' target='_blank' rel='noreferrer' className='text-sm'>
                          <i className='fab fa-twitter'></i>
                        </a>
                      </li>
                      <li className='mr-[30px] last:mr-0'>
                        <a href='#' target='_blank' rel='noreferrer' className='text-sm'>
                          <i className='fab fa-linkedin-in'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='flex items-center justify-start lg:justify-end mb-8'>
                    <span className='text-sm text-accents_8'>
                      © {new Date().getFullYear()}&nbsp;Federal Law Firm. &nbsp;All Rights Reserved
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-3 hidden md:block'>
                  <div className='text-primary'>Let’s Work Together</div>
                </div>
                <div className='col-lg-9 hidden md:block'>
                  <div>
                    <hr className='my-4 mx-auto w-full h-px bg-accents_6 rounded border-0'></hr>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col hidden md:block'>
                  <div className='flex items-center justify-between pt-6'>
                    <div className='flex items-center justify-center'>
                      <div className='border border-accents_8 p-2 rounded-[50%]'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                      <div className='ml-2 text-accents_6'>+93 781 938 546</div>
                    </div>
                    <div className='flex items-center justify-center'>
                      <div className='border border-accents_8 p-2 rounded-[50%]'>
                        <i className='flaticon-mail'></i>
                      </div>
                      <div className='ml-2 text-accents_6'>info@federallawfirm.af</div>
                    </div>
                    <div className='flex items-center justify-center'>
                      <div className='border border-accents_8 p-2 rounded-[50%]'>
                        <i className='flaticon-pin'></i>
                      </div>
                      <div className='ml-2 text-accents_6'>Shahri Now, Kabul, Afghanistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
