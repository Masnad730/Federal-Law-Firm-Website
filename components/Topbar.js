import Link from 'next/link'

const Topbar = () => {
  return (
    <div className='py-5 hidden lg:block'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='flex justify-between'>
              <Link href='/'>
                <img src='/images/logo.png' alt='' width='193' />
              </Link>
              <div className='flex items-center'>
                <div className='mr-4'>
                  <div className='border border-accents_8 p-3 rounded-[50%]'>
                    <i className='flaticon-phone-call'></i>
                  </div>
                </div>
                <div>
                  <div className='text-lg'>Call For a Free Consultation</div>
                  <div className='font-bold'>+93 781 938 546</div>
                </div>
                <a href='mailto:info@federallawfirm.af'>
                  <div className='ml-12 px-10 py-4 flex items-center bg-primary text-white rounded-md'>
                    <i className='fa fa-envelope'></i>
                    <span className='font-playfair tracking-widest ml-3 uppercase'>Email Us</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar
