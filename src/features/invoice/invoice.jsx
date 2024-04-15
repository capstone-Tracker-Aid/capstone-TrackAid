import styles from './invoice.module.css'
const Invoice = ({formData,handleForm, setShowInvoice, handleDownload}) =>{ 
    //  const handleOpenPreview = () => {
    //     setShowInvoice(true);
    //   };
     return (
         <>
          <div className={styles.invoice}>
                    <div className = {styles.invoiceContainer}>
                    <div className={styles.flex}>
                        <div className={styles.leftInvoiceContent}>
                            <div className={styles.Invoicelogo}>
                                    <p>Add Your Logo</p>
                                </div>
                            <label>
                                From:
                                <input id='sender' onChange={handleForm} name='sender' value={formData.sender} placeholder='who is this invoice from (required)' />
                            </label>
                            <label>
                                Bill To:
                                <input  placeholder='who is this invoice to? (required)' onChange={handleForm} name='receiver' value={formData.receiver}/>
                            </label>
                            <label>
                            Address:
                                <input  placeholder='clients addresss' onChange={handleForm} name='address' value={formData.address}/>
                            </label>
                            <label>
                                Telephone:
                                <input type='number'   placeholder='clients Telephone' onChange={handleForm} name='telephone' value={formData.telephone}/>
                            </label>
                        </div>
                        <div className={styles.rightInvoiceContent}>
                                <div>
                                    <h2>INVOICE</h2>
                                    <input type="text" className={styles.invoiceNumberField} />
                                </div>
                                <div className={styles.inputsContainer}>
                                        <div className={styles.text}>
                                            <p>Date</p>
                                            <p> Payment Terms   </p>
                                            <p> Due Date  </p>
                                            <p>  Po Number </p>
                                        </div>
                                        <div className={styles.inputs}>
                                            <input type='text' onChange={handleForm} name='date' value={formData.date} />
                                            <input type='text' onChange={handleForm} name='terms' value={formData.terms} />
                                            <input type='text' onChange={handleForm} name='duedate' value={formData.duedate}/>
                                            <input type='text' onChange={handleForm} name='PNumber' value={formData.PNumber}/>
                                        </div>
                                </div>
                        </div>
                    </div>
                    <div className={styles.itemsdescription}>
                        <div className={styles.columnBreak}>
                            <p>item</p>
                            <div className={styles.rate}>
                                <p className={styles.rateOne}>Quantity <span>Rate</span></p>
                                <p>Amount</p>
                            </div>
                        </div>
                    <div className={styles.itemQuantity}>
                            <div>
                                <textarea rows='3' cols='60' onChange={handleForm} name='item' value={formData.item}>Description of service or product..</textarea>
                                <button className={styles.lineBtn}>Line Item</button>
                            </div>
                            <input type='text' placeholder='1' onChange={handleForm} name='quantity' value={formData.quantity}/>
                            <input type='text' placeholder='$  0' onChange={handleForm} name='rate' value={formData.rate}/>
                            <p className={styles.amount}>$0.00 </p>
                    </div>
                    <div className={styles.notes}>
                            <div> <p>Notes</p>
                                <textarea rows='3' cols='65' onChange={handleForm} name='notes' value={formData.notes}>Note any relevant information not already covered</textarea>
                            </div>
                            <div className={styles.subtotal} >
                                    <p className={styles.subAmt}>Subtotal <span >$0.00</span></p>
                                    <div className={styles.tax}>
                                    <p>Tax</p>
                                    <select>
                                    <option> 0 %</option>
                                    </select>
                                    </div>
                                    <p className={styles.discount}>+Discount <span>+shipping</span></p>
                                    <p className={styles.totalAmt}>Total <span>$0.00</span></p>
                            </div>
                    </div>
                    </div>
                    </div>
                    <div className={styles.columRight}>
                        <button className={styles.invoiceBtn}>Send invoice</button>
                        <p onClick={handleDownload}  className={styles.download
                        }>Download invoice</p>
                        <p>Currency:USD</p>
                        <p  className={styles.save} onClick={()=>setShowInvoice(true)}>Save Template</p>
                        <hr/>
                        <p>My Invoice </p>
                    </div>
                </div>   
         </>
        )
 }

export default Invoice
export const PreviewInvoice = ({formData,setShowInvoice,handleDownload})=>{
    // const handleClosePreview = (e) => {
    //     e.preventDefault()
    //    setShowInvoice(false);
    //   };
    return (
        <>
            <div className={styles.invoice}>
                <div className = {styles.invoiceContainer}>
                  <div className={styles.flex}>
                    <div className={styles.leftInvoiceContent}>
                        <div className={styles.Invoicelogo}>
                                <p>logo here</p>
                            </div>
                        <label>
                            {`From:${formData.sender}`}
                        </label>
                        <label>
                        {`Bill To:${formData.receiver}`}
                        </label>
                        <label>
                        {`Address:${formData.address}`}
                            
                        </label>
                        <label>
                        {`Telephone:${formData.telephone}`}
                            
                           
                        </label>
                    </div>
                    <div className={styles.rightInvoiceContent}>
                            <div>
                                <h2>INVOICE</h2>
                                <input type="text" className={styles.invoiceNumberField} />
                            </div>
                            <div className={styles.inputsContainer}>
                                    <div className={styles.text}>
                                        <p> {`Date:${formData.date}`}</p>
                                        <p> {` Payment Terms:${formData.terms}`}  </p>
                                        <p> {`Due Date:${formData.duedate}`}  </p>
                                        <p>{`Po Number:${formData.PNumber}`}   </p>
                                    </div>
                             </div>
                     </div>
                  </div>
                  <div className={styles.itemsdescription}>
                    <div className={styles.columnBreak}>
                        <p> item</p>
                        <div className={styles.rate}>
                            <p className={styles.rateOne}>Quantity <span>Rate</span></p>
                            <p>Amount</p>
                        </div>
                    </div>
                   <div className={styles.itemQuantity}>
                        <div>
                            <p className={styles.desc}>{`item description:${formData.item}`}</p>
                        </div>
                        <p className={styles.quantity}> {`Quantity:${formData.quantity}`}</p>
                        <p> {`rate:${formData.rate}`}</p>
                        <p className={styles.amount}> {`$:${formData.amt}`} </p>
                   </div>
                   <div className={styles.notes}>
                        <div> <p>Notes</p>
                            <p> {`Additional notes:${formData.notes}`}</p>
                        </div>
                        <div className={styles.subtotal} >
                                <p className={styles.subAmt}>Subtotal <span >$0.00</span></p>
                                <div className={styles.tax}>
                                <p>Tax</p>
                                <select>
                                <option> 0 %</option>
                                </select>
                                </div>
                                <p className={styles.discount}>+Discount <span>+shipping</span></p>
                                <p className={styles.totalAmt}>Total <span>$0.00</span></p>
                        </div>
                   </div>
                  </div>
                </div>
                <div className={styles.btns}>
                    <button  onClick={ ()=> setShowInvoice(false)} className={styles.lineBtn}> Edit invoice</button>
                    <button  onClick={handleDownload()} className={styles.lineBtn}>Download invoice</button>
                </div>
            </div>
        </> 
    )
}