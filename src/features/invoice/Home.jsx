import { useState } from 'react';
import Invoice from './invoice.jsx';
import {PreviewInvoice} from './invoice.jsx';
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

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDownload = () => {
    window.print();
  };
  return (
    <MiniDrawer>
        {showInvoice ? (
            <PreviewInvoice formData={formData} setShowInvoice={setShowInvoice}  handleDownload={handleDownload}/>)
             : (
            <Invoice
            formData={formData}
            handleForm={handleForm}
            showInvoice={showInvoice}
            setShowInvoice={setShowInvoice}
            handleDownload={handleDownload}
            />)
        }
      
    </MiniDrawer>
  );
};
export default HomeInvoice;