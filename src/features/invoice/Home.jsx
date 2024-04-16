import { useState } from 'react';
import Invoice from './invoice.jsx';
import {PreviewInvoice} from './invoice.jsx';
import {v4 as uuidv4} from 'uuid'
// import styles from './invoice.module.css';
import MiniDrawer from '../../layout/drawer/drawer';
const HomeInvoice = () => {
  const [showInvoice, setShowInvoice] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    duedate: '',
    terms: '',
    PNumber: '',
    sender: '',
    receiver: '',
    address: '',
    telephone: '',
    item: '',
    quantity: '',
    rate: '',
    amt: '',
    notes: ' ',
  });
  const [list,setList] = useState([])
  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const calculateAmt = ()=>{
    return formData.rate * formData.quantity
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const amount = calculateAmt()
    const newItems={
      id:uuidv4(),
      item:formData.item,
      quantity:formData.quantity,
      rate:formData.rate,
      amt:amount,
    }
    // Reset form fields individually
  setFormData({
    item: '',
    quantity: '',
    rate: '',
    amt: '',
    
  });
  console.log(formData)
  console.log(newItems)
  setList([...list,newItems])
   console.log(list)
    
  }
 
  const handleDownload = () => {
    window.print();
  };
  return (
    <MiniDrawer>
        {showInvoice ? (
            <PreviewInvoice calculateAmt={calculateAmt} formData={formData} 
              setShowInvoice={setShowInvoice}
              handleSubmit={handleSubmit}
              list={list}
              setList={setList}
              handleDownload={handleDownload}
                
                />)
             : (
            <Invoice
            calculateAmt={calculateAmt}
            formData={formData}
            handleForm={handleForm}
            showInvoice={showInvoice}
            setShowInvoice={setShowInvoice}
            handleDownload={handleDownload}
            handleSubmit={handleSubmit}
            list={list}
            setList={setList}
            />)
        }
      
    </MiniDrawer>
  );
};
export default HomeInvoice;