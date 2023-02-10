import  { useEffect, useState } from 'react';

import './App.css';
import OpenAIAPI from "react-openai-api";

function App() {

  const [response, setResponse] = useState('')
  
const callOpenIA  = ()=>{
   OpenAIAPI({
    apiKey:process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : '',
    payload:{
      prompt: "Mario: Hi, how are you?",
      maxTokens: 25,
      temperature: 0.5,
      n: 1,
    },
    responseHandler:responseHandler
  })
}
 const responseHandler = (response: any) => {
  setResponse(response.choices[0].text)
}
   
  //callOpenIA()

 

  return (
    <>
      <p>{response}</p>
    </>
  );
}

export default App;


