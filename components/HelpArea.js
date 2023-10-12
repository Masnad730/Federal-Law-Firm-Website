const HelpArea = () => {
  return (
    <section className='relative py-14 bg-accents_2'>
      <div className='absolute left-0 top-0 w-[46%] h-full lg:bg-[url("/images/help-area-bg.png")] bg-no-repeat bg-cover'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'></div>
          <div className='col-lg-6'>
            <div className='md:pl-8 pb-6'>
              <div className='pb-8'>
                <h2 className='text-2xl xl:text-3xl uppercase mb-4'>
                  we are here to provide legal help
                </h2>
                <p>
                  In Federal Law Firm, we are aiming to provide high quality legal consultancy,
                  support and results for your legal issues.
                </p>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='flex'>
                    <div className='mr-6'>
                      <i className='fa fa-gavel text-3xl'></i>
                    </div>
                    <div className='mb-3'>
                      <h3>Get Your Legal Advice</h3>
                      <p>
                        We offer services of superb quality based on our accumulated extensive and
                        profound knowledge and experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='flex'>
                    <div className='mr-6'>
                      <i className='fa fa-users text-3xl'></i>
                    </div>
                    <div className='mb-3'>
                      <h3>Work With Expert Lawyers</h3>
                      <p>
                        This is one aspect of law which requires a lot of attention as it dwells
                        within the society.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='flex'>
                    <div className='mr-6'>
                      <i className='fa fa-user text-3xl'></i>
                    </div>
                    <div className='mb-3'>
                      <h3>Client Service</h3>
                      <p>
                        Honestly and responsibly serving a client is crucial to success in the
                        client-focused legal industry. Our professionals master client development
                        skills as well as customer service skills.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='flex'>
                    <div className='mr-6'>
                      <i className='fa fa-info-circle text-3xl'></i>
                    </div>
                    <div className='mb-3'>
                      <h3>Attention to Details</h3>
                      <p>
                        Our lawyers can pick up on small things allowing a small error to slip
                        through can change the meaning of a contract, causing a lot of problems.
                      </p>
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

export default HelpArea
