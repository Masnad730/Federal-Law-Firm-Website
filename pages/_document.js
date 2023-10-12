import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='google-site-verification' content='' />
          <meta name='google-site-verification' content='' />
          <meta charSet='UTF-8' />
          <meta
            name='keywords'
            content='
            Federal,
            Federal Law Firm,
            Full Service Law Firm
            Contact Us,
            Legal Services,
            Tax Service,get in touch,
            contact a law firm,
            need a law firm in afghanistan
            Law firm in Afghanistan
            Law firm,
            Law firm nearby,
            Top law firms,
            Top law firms in Afghanistan,
            Leading law firm in Afghanistan
            Taxation law in Afghanistan,
            Corporate law firm in Afghanistan,
            Famous law firms,
            Aviation law in Afghanistan,
            Banking law in Afghanistan,
            Business crimes in Afghanistan,
            Construction and infrastructure in Afghanistan,
            Employment and labor Law,
            Energy and natural resources of Afghanistan,
            Afghanistan government,
            Immigration law,
            Insolvency, Bankruptcy and Restructuring in Afghanistan,
            Insurance law in Afghanistan,
            Intellectual Property in Afghanistan,
            Litigation in Afghanistan,
            Arbitration and dispute resolution in Afghanistan,
            Media and Entertainment law in Afghanistan,
            Taxation in Afghanistan,
            Attorney in Afghanistan,
            Trademark registration in Afghanistan,
            Intellectual Property rights in Afghanistan,

          '
          />
          <meta name='robots' content=' index, follow' />

          {/* Facebook Open Graph  */}
          <meta property='og:title' content='Federal Law Firm' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://www.federallawfirm.af/' />
          <meta property='og:image' content='https://www.federallawfirm.af/images/logo.png' />
          <meta property='og:site_name' content='Federal Law Firm' />
          <meta
            property='og:description'
            content='In Federal Law Firm, we are aiming to provide high quality legal consultancy, support and results for your legal issues.'
          />
          <meta
            property='og:image:secure_url'
            content='https://www.federallawfirm.af/images/logo.png'
          />

          {/* Twitter */}
          <meta name='twitter:card' content='summary' />
          <meta name='twitter:title' content='Federal Law Firm' />
          <meta
            name='twitter:description'
            content='Federal law Firm is a full-service law firm based in Kabul, Afghanistan with Afghan licensed attorney representing prominent international and national clients.'
          />
          <meta name='twitter:image' content='https://www.federallawfirm.af/images/logo.png' />

          {/* Links To External Resources */}
          <link rel='stylesheet' type='text/css' href='/font/flaticon.css' />
          <link
            rel='stylesheet'
            href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
            integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
            crossOrigin='anonymous'
          />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link
            href='https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Monoton&display=swap'
            rel='stylesheet'
          />
          {/* End - Links To External Resources */}

          {/* Favicon For Different Browser */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicon-package/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-package/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-package/favicon-16x16.png'
          />
          <link rel='icon' type='image/x-icon' href='/favicon-package/favicon.ico' />
          <link rel='manifest' href='/favicon-package/site.webmanifest' />
          <link rel='mask-icon' href='/favicon-package/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff'></meta>
          {/* Favicon - End */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
