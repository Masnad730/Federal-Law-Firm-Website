import { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router'

const ResponsiveHeader = ({ activePage }) => {
  Router.events.on('routeChangeStart', (url) => {
    setShowMenu(false)
  })
  const [showSubMenu1, setShowSubMenu1] = useState(false)
  const [showSubMenu2, setShowSubMenu2] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='transition-custom w-full overflow-auto'>
      <div>
        <div className='flex items-start justify-between py-5 md:py-4'>
          <div
            className={
              activePage === 'home'
                ? 'bg-white pt-4 pr-8 pb-5 pl-[47px] md:pl-16 rounded-r-full shadow-card'
                : 'pl-5 md:pl-10'
            }
          >
            <div className='flex items-center justify-center'>
              <Link href='/' legacyBehavior>
                <a>
                  <img src='/images/logo.png' alt='Federal Law Firm' width='166' />
                </a>
              </Link>
            </div>
          </div>
          <div className='self-center pr-5 md:pr-10'>
            <button
              className='px-0 py-0 my-0 text-accents_9 transition-all focus:outline-none'
              onClick={() => setShowMenu(!showMenu)}
            >
              <svg
                className='fill-current'
                xmlns='http://www.w3.org/2000/svg'
                width='28'
                height='28'
                viewBox='0 0 20 20'
              >
                <title>menu-toggle</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
              </svg>
            </button>
            <div
              className={
                showMenu
                  ? 'fixed top-0 right-[0%] bg-primary text-accents_0 w-80 md:w-96 h-screen overflow-y-auto z-50 transition-all duration-500'
                  : 'fixed top-0 -right-full bg-primary text-accents_0 w-0 h-screen z-50 transition-all duration-500'
              }
            >
              <div className='w-full flex flex-col'>
                <div className='flex items-start justify-between px-8 py-6 bg-white'>
                  <Link href='/' legacyBehavior>
                    <a>
                      <img src='/images/logo.png' alt='Federal Law Firm' width='168' />
                    </a>
                  </Link>
                  <label
                    htmlFor='menu-toggle'
                    className='cursor-pointer transition-all'
                    onClick={() => setShowMenu(false)}
                  >
                    <svg className='text-accents_9' width='30' height='30' viewBox='0 0 20 20'>
                      <title>cancel-menu</title>
                      <path d='M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z'></path>
                    </svg>
                  </label>
                </div>
                <nav className='flex items-center overflow-y-scroll'>
                  <ul className='flex flex-col w-full font-bold py-2'>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/' legacyBehavior>
                        <a
                          className={
                            activePage === 'home'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Home
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/about' legacyBehavior>
                        <a
                          className={
                            activePage === 'about'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          About Us
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/practice-ares' legacyBehavior>
                        <a
                          className={
                            activePage === 'about'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Practice Areas
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/team' legacyBehavior>
                        <a
                          className={
                            activePage === 'about'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Our Team
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/career' legacyBehavior>
                        <a
                          className={
                            activePage === 'about'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Career
                        </a>
                      </Link>
                    </li>
                    <li className='py-2.5 w-full px-5'>
                      <Link href='/contact' legacyBehavior>
                        <a
                          className={
                            activePage === 'about'
                              ? 'text-tertiary'
                              : 'transition-custom hover:text-tertiary'
                          }
                        >
                          Contact Us
                        </a>
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='flex items-center mt-8 mb-3 ml-5'>
                  <ul className='flex items-center text-accents_0'>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://www.facebook.com/MasnadIPServices/'
                      >
                        <i className='flaticon-facebook'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://twitter.com/masnadlc'
                      >
                        <i className='flaticon-twitter'></i>
                      </a>
                    </li>
                    <li className='flex items-center mr-2 last:mr-0'>
                      <a
                        className='w-10 h-10 rounded-1/2 flex items-center justify-center bg-tertiary'
                        href='https://www.linkedin.com/company/masnad?trk=biz-companies-cym'
                      >
                        <i className='flaticon-linkedin'></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='flex mb-10 ml-5'>
                  <div className='flex flex-col pt-6 text-white'>
                    <div className='flex items-center pb-4 last:pb-0'>
                      <div className='border border-accents_8 p-2'>
                        <i className='flaticon-phone-call'></i>
                      </div>
                      <div className='ml-2'>+93 781 938 546</div>
                    </div>
                    <div className='flex items-center pb-4 last:pb-0'>
                      <div className='border border-accents_8 p-2'>
                        <i className='flaticon-mail'></i>
                      </div>
                      <div className='ml-2'>info@federallawfirm.af</div>
                    </div>
                    <div className='flex items-center pb-4 last:pb-0'>
                      <div className='border border-accents_8 p-2'>
                        <i className='flaticon-pin'></i>
                      </div>
                      <div className='ml-2'>Shahri Now, Kabul, Afghanistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*<div className='col-4 flex items-center justify-end'></div>*/}
        </div>
      </div>
      <span className={showMenu ? 'overlay-full-black' : 'hidden'}></span>
    </header>
  )
}

export default ResponsiveHeader
