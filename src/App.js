// import { Picker } from 'emoji-mart';
// import 'emoji-mart/css/emoji-mart.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

    const [random , setRandom] = useState("");
  function getRandomItem(arr) {

    
    const randomIndex = Math.floor(Math.random() * arr.length);

    
    const item = arr[randomIndex];

    return item;
}

const array = ["Alan", "Bob", "Carol", "Dean", "Elin"];

  
console.log(random);


const [message , setMessage] = useState([]);

const [messageText , setMessageText ] = useState("");

const handleChange =(e)=>{
  setMessageText(e.target.value)
}

console.log(message)




const handleClick=()=>{

  if (messageText === '') return;

  const result = getRandomItem(array)
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes() 

  const msg = {text : messageText , rand : result , date : time}
  console.log(msg)
  setMessage([...message , msg])
  setMessageText("")


  
}






  return (
    <div className="App">
     

    <div className='intro'>
      Introduction
    </div>

    <div>
    {message.map((item , index) =>{
      return <div key={index}>
        <div> <span className='log'>{item.rand.charAt(0).toUpperCase() + item.rand.charAt(item.rand.length-1).toUpperCase() }</span> <span className='randomId'>{item.rand}</span> <span className='date'>{item.date}</span> </div>

        <div className='text'>{item.text} </div>
         
        
        </div>
    })}
  </div>

    

    <input placeholder='Type Message' value={messageText} onChange={handleChange}></input>
    
     <button onClick={handleClick}>Send</button>

     {/* <span>
   <Picker  />
</span> */}
     
    </div>
  );
}

export default App;


