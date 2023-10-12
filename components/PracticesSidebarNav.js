import Link from 'next/link'

const PracticesSidebarNav = ({ selectedPractice, allPractices }) => {
  return (
    <div className='pt-20 pb-10 lg:pt-0 sidebar-nav'>
      <div className='border-b border-accents_4 mb-6'>
        <span className='block font-bold pb-3 before:absolute before:left-0 before:bottom-[-1.5px] before:h-0.5 before:w-6 before:bg-primary relative'>
          Categories
        </span>
      </div>
      <ul className='lg:h-[774px] overflow-y-scroll'>
        <li className='border-b border-accents_2'>
          <Link href='/practice-areas' legacyBehavior>
            <a className='flex items-center pr-10 pb-4 pt-3'>
              <i className='flaticon-arrow-pointing-to-right text-xs pr-6 text-primary'></i>
              <h3 className='text-sm font-normal hover:text-primary'>All Practice Areas</h3>
            </a>
          </Link>
        </li>
        {allPractices.map((practice, index) => {
          if (index < 5) {
            return (
              <li className='border-b border-accents_2 last:border-b'>
                <Link href={`/practice/${practice.slug}`} legacyBehavior>
                  <a className='flex items-center pr-10 pb-4 pt-3 hover:text-primary'>
                    <i className='flaticon-arrow-pointing-to-right text-xs pr-6 text-primary'></i>
                    <h3 className='text-sm font-normal'>{practice.acf.practice_title}</h3>
                  </a>
                </Link>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}
export default PracticesSidebarNav
