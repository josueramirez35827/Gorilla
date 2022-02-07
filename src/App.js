import { useState } from 'react';
import './App.css';
import Receipts from './components/Receipts';
import Records from './components/Records';

function App() {

  const [receipts, setReceipts] = useState(receipts)

  const data = Records.map((item, index) => {
    return (<Receipts {...item} key={index} />)
  })


  return (
    <div className="App">
      {data}
    </div>
  );
}

export default App;
