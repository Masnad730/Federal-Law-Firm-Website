import Link from 'next/link'

import ResponsiveHeader from '../components/ResponsiveHeader'

const Header = ({ activePage }) => {
  return (
    <>
      <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
      </div>
      <header className='hidden lg:block bg-accents_2 py-4'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <nav>
                <ul className='flex items-start justify-between uppercase'>
                  <li className='px-2'>
                    <Link href='/' legacyBehavior>
                      <a>home</a>
                    </Link>
                  </li>
                  <li className='px-2'>
                    <Link href='/about' legacyBehavior>
                      <a>about us</a>
                    </Link>
                  </li>
                  <li className='px-2'>
                    <Link href='/practice-areas' legacyBehavior>
                      <a>practice areas</a>
                    </Link>
                  </li>
                  <li className='px-2'>
                    <Link href='/team' legacyBehavior>
                      <a>our team</a>
                    </Link>
                  </li>
                  <li className='px-2'>
                    <Link href='/careers' legacyBehavior>
                      <a>career</a>
                    </Link>
                  </li>
                  <li className='px-2'>
                    <Link href='/contact' legacyBehavior>
                      <a>contact us</a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
