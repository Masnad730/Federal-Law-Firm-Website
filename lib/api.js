import axios from 'axios'

export async function getFederalPractices() {
  const practices = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/federal-practices/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return practices
}

export async function submitUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar) {
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/federal-usr-enquires',
          {
            title: 'User Enquiry - Federal Law Firm',
            status: 'publish',
            fields: {
              name: userInfo.name,
              email: userInfo.email,
              subject: userInfo.subject,
              Message: userInfo.message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your message has been submitted successfully.')
            setIsLoading(false)
          } else {
            enqueueSnackbar('There was an error trying to send your message, Please try again.')
            setIsLoading(false)
          }
          return res.data
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          enqueueSnackbar(
            'There was an error trying to send your message, Please check your network connection and try again.'
          )
        })
    })
    .catch((err) => {
      console.log(err)
    })
  setUserInfo({
    name: '',
    email: '',
    caseSubject: '',
    message: '',
  })

  return res
}
