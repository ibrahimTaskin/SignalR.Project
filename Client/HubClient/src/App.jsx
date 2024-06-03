import { useState, useEffect } from "react";
import "./App.css";
import { HubConnectionBuilder } from "@microsoft/signalr";

function App() {
  const [hubConnection, setHubConnection] = useState(null);
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");
  const [connectionId, setConnectionId] = useState("");
  const [connectionStatus, setConnectionStatus] = useState({ message: '', color: 'black' });

  useEffect(() => {
    createHubConnection();
  }, []);

  const createHubConnection = async () => {
    const hubCn = new HubConnectionBuilder()
      .withUrl("http://localhost:5001/hubmanager")
      .withAutomaticReconnect()
      .build();
    try {
      await hubCn.start();
      setConnectionId(hubCn.connectionId);
      setHubConnection(hubCn);
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    if (hubConnection && connectionId === hubConnection.connectionId) {
      hubConnection.on("ReceiveMessage", (message) => {
        if (message.trim() !== '') {
          setMessageList((prevMessages) => [...prevMessages, message]);
        }
      });
    }

    hubConnection.onreconnecting(() => {
      setConnectionStatus({ message: 'Bağlantı kuruluyor...', color: 'orange' });
    });

    hubConnection.onreconnected(() => {
      setConnectionStatus({ message: 'Bağlantı kuruldu', color: 'green' });
    });

    hubConnection.onclose(() => {
      setConnectionStatus({ message: 'Bağlantı kapandı', color: 'red' });
    });
    
  }, [hubConnection,connectionId]);

  const handleChange = (event) => {
    setMessage(event.target.value);    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (hubConnection) {
      hubConnection.invoke("SendMessageAsync", message)
                    .then((res) => {
                      setMessage('');                     
                    })
                    .catch((error) => {
                      console.log(`Hata oluştu ${error}`);
                    });
    }
  };

  return (
    <>
      <div className="container">
        <div className="statu" style={{ display: connectionStatus.message ? 'block' : 'none', color: connectionStatus.color }}>
          {connectionStatus.message}
        </div>
        <div className="inputContainer">
          <input
            type="text"
            value={message}
            onChange={handleChange}
            className="input"
          />
          <button onClick={handleSubmit} className="button">
            Gönder
          </button>
        </div>
        <div className="messageList">
          {messageList.map((msg, index) => (
            <div key={index} className="message">
              {msg}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
