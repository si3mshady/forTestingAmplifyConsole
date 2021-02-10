
import './App.css';
import React from 'react'
import Axios from 'axios'

function App() {

  React.useEffect(() => {
    const url = "https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=1377ed86-72cd-4ffd-b5a3-47d380987da2&token=2iQMjEaKbIG1CFRIkIPqrRdf2MrqM1mougHw4zmQ5M&operation=startbuild"
    const url2 = "https://webhooks.amplify.us-east-1.amazonaws.com/prod/webhooks?id=1377ed86-72cd-4ffd-b5a3-47d380987da2&token=2iQMjEaKbIG1CFRIkIPqrRdf2MrqM1mougHw4zmQ5M"
    const header =  {headers: {
      'Content-Type': 'application/json'
      }
    }
    Axios.post(url, {}, header)
      .then(response => {
        console.log(response)
        console.log("hit webhook")
      })
      .catch(error => {
        console.log(error)
        
      })

  }, [])


  return (
    <div className='App'> Clean Slate </div>
  );
}

export default App;
