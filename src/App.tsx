import "./App.css";
import { msgData } from "./data";
import Message from "./components/Message";
import { useState, useEffect } from "react";
 

function App() {
  const [data, setData] = useState(msgData)
  const [msgCount, setMsgCount] = useState(0);
  const markAll = () => {
   const res = data.map((msg)=>{
      return {...msg,read:true}
    })
    setData(res)
  };
  useEffect(() => {
    const count = data.reduce((total, current) => {
      if (current.read === false) return total + 1;
      return total;
    }, 0);
    setMsgCount(count);
  }, [data]);

  return (
    <div className="notifications">
      <div className="title">
        <h2>Notifications</h2>
        <div className="msgCount">{msgCount}</div>
        <p style={{cursor: 'pointer'}} onClick={markAll} >Mark all as read</p>
      </div>

      
      {data.map((msg, index) => (
        <Message
          index={index}
          data={data}
          setData={setData}
          key={index}
          {...msg}
        />
      ))}
    </div>
  );
}

export default App;
