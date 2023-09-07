export const APIROOT = 'https://szymon.kowalski.cybulski.dev/api/'
// export const APIROOT = 'http://localhost:8010/api/'
export const MEETINGS_URL = APIROOT + 'meetings/'
export const PENDING_MEETINGS_URL = APIROOT + 'meetings/pending/'
export const PLACES = MEETINGS_URL + 'places/'
export const PATCH_NOTES_URL = APIROOT + "patch_notes/"



export const authHeaders = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjg2NDY5MjY3LCJpYXQiOjE2ODYyOTY0NjcsImp0aSI6ImQwOTdkMWJkZmNlMzQzYThhYzYyYjFlZWE1M2FlMWJhIiwidXNlcl9pZCI6MiwibmFtZSI6InN6eW1vbiJ9.nlHd2JOUcEnrLwBTGYZu6fXQfJmlQMnpcKFIj1CdzDY",
  },
}



// const apicall = async () => {
//   const payload = {
//     username: 'szymon',
//     password: 'haslo123'
//   };

//   const res = await fetch('https://szymon.kowalski.cybulski.dev/api/token/', {
//     method: 'POST',
//     body: JSON.stringify(payload),
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return res.json()
// }
//   const {data, error, isLoading} = useQuery('login', apicall);