export const APIROOT = 'https://szymon.kowalski.cybulski.dev/api/'
// export const APIROOT = 'http://localhost:8010/api/'
export const MEETINGS_URL = APIROOT + 'meetings/'
export const MEETINGS_URL_CONFIRM = MEETINGS_URL + 'confirm/'

export const PENDING_MEETINGS_URL = APIROOT + 'meetings/pending/'
export const PLACES = MEETINGS_URL + 'places/'
export const PATCH_NOTES_URL = APIROOT + "patch_notes/"

export const USERS_URL = APIROOT + 'users/'
function getAuthorizationHeader() {
  const access_token = localStorage.getItem("access_token");
  return {
    Authorization: `Bearer ${access_token}`,
  };
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