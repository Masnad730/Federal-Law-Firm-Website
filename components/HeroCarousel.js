import { Carousel } from 'react-responsive-carousel'

const HeroCarousel = () => {
  return (
    <Carousel
      autoPlay={false}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      infiniteLoop={true}
      interval={4000}
      showIndicators={true}
      animationHandler='fade'
      swipeable={false}
      dynamicHeight={false}
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              className='w-2 h-2 inline-block my-0 mx-2 bg-primary'
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          )
        }
        return (
          <li
            className='w-2 h-2 inline-block my-0 mx-2 bg-white'
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role='button'
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        )
      }}
    >
      <div className='relative h-[70vh]'>
        <img src='/images/slide1.jpg' alt='Slider 1' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black/[.55]'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <div className='text-accents_0 text-center'>
              <h1 className='mb-6 last:mb-0 text-[1.645rem] md:text-4xl xl:text-5xl font-bold font-poppins tracking-widest uppercase'>
                federal law firm
              </h1>
              <h4 className='mb-6 last:mb-0 text-xl md:text-2xl lg:text-3xl font-rubik font-light tracking-wide'>
                We are committed to safeguard your rights anywhere
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[70vh]'>
        <img src='/images/slide2.jpg' alt='Slider 2' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black/[.35]'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <div className='pt-20'>
              <div className='mb-10 text-white'>
                <h3 className='mb-6 last:mb-0 text-xl md:text-2xl xl:text-3xl font-bold font-poppins tracking-widest uppercase'>
                  ensuring justice for you is our priority
                </h3>
                <h4 className='mb-6 last:mb-0 text-lg md:text-xl lg:text-2xl font-rubik font-light tracking-wide'>
                  Access to justice is defined as the ability of people to seek and obtain a remedy
                  through formal or informal institutions of justice for grievances in.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative h-[70vh]'>
        <img src='/images/slide3.jpg' alt='Slider 3' className='w-full h-full object-cover' />
        <div className='absolute top-0 left-0 right-0 bottom-0 z-10 w-full h-full opacity-100 transition-custom bg-black/[.35]'>
          <div className='absolute top-1/2 left-1/2 z-[9999] w-11/12 md:w-2/3 lg:w-auto transform -translate-x-1/2 -translate-y-1/2'>
            <div className='pt-20'>
              <div className='mb-10'>
                <h2 className='text-white text-xl md:text-2xl lg:text-3xl font-poppins tracking-wide leading-normal'>
                  Federal law Firm comprises of a diverse group of lawyers uniquely positioned to
                  provide a broad range of legal services.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  )
}

export default HeroCarousel
