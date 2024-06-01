import { useState , useEffect } from 'react'
import './App.css'
import { HubConnectionBuilder} from "@microsoft/signalr";

function App() {

  const [hubConnection, setHubConnection] = useState(null);  
  const [message, setMessage] = useState('');
  const [connectionId, setConnectionId] = useState('');

  useEffect(() => {
    createHubConnection();
  }, [])
  
  const createHubConnection =async () => {
    const hubCn = new HubConnectionBuilder().withUrl("http://localhost:5001/hubmanager").build()
    try {
      await hubCn.start();
      setConnectionId(hubCn.connectionId)
      setHubConnection(hubCn)
    } 
    catch (e) {
      console.log("error", e)
    }
  }

  useEffect(() => {
    if(hubConnection && connectionId === hubConnection.connectionId){
      hubConnection.on("ReceiveMessage",(message) => {
        //messageList.push(message);
        console.log(message);
      })
    }  
  }, [hubConnection])

  const handleChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(hubConnection){
      hubConnection.invoke("SendMessageAsync",message).catch(error => {
        console.log(`Hata oluştu ${error}`);
      })
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <button type="submit">Gönder</button>
      </form>
    </>
  )
}

export default App;
