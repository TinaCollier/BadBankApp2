import { useState } from 'react';

const Balance = ({ onChange, isDeposit, isBlank, isValid }) => {
    const choice = ['Deposit', 'Cash Back'];
    console.log(`ATM isDeposit: ${isDeposit}`);
    const labelValue = isBlank ? '' : choice[Number(!isDeposit)];
    
    return (
      <label className="label huge">
        <h3>{ labelValue }</h3>
        <input  id="number-input" type="number" width="200" onChange={onChange}></input>
        <input type="submit" width="200" value="Submit" id="submit-input" disabled={ isBlank || !isValid } ></input>
      </label>
    );
  };
  
  const Account = () => {
    const [deposit, setDeposit] = useState(0);
    const [totalState, setTotalState] = useState(0);
    const [isDeposit, setIsDeposit] = useState(true);
    const [atmMode, setAtmMode] = useState('');
    const [isBlank, setIsBlank] = useState(true);
    const [validTransaction, setValidTransaction] = useState(false);
  
    let status = `Account Balance $ ${totalState} `;
    console.log(`Account Rendered with isDeposit: ${isDeposit}`);
    const handleChange = (event) => {
      console.log(`handleChange ${event.target.value}`);
      setValidTransaction(false);
      
      if (Number(event.target.value) <= 0) {
        return setValidTransaction(false);  
      }
      if (atmMode === 'Cash Back' && totalState < Number(event.target.value)) {
        setValidTransaction(false);
      } else {
        setValidTransaction(true);
      }
  
      setDeposit(Number(event.target.value));
      };
  
    const handleSubmit = (event) => {
      
      let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
      
      setTotalState(newTotal);
      setValidTransaction(false);
      
      event.preventDefault();
    };
  
    const handleModeSelect = event => {
      setAtmMode(event.target.value);
      setValidTransaction(false);
      let option = event.target.value;
  
      if(option === 'Deposit') {
        setIsDeposit(true);
        setIsBlank(false);
        
      } else if (option === 'Cash Back') {
        setIsDeposit(false);
        setIsBlank(false);
        
      } else {
        setIsBlank(true);
      }
  
      event.preventDefault();
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
        <label>Select an action below to continue</label>
        <select onChange={(e) => handleModeSelect(e)} name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Deposit</option>
        <option id="cashback-selection" value="Cash Back">Cash Back</option>
        </select>
        <Balance 
        onChange={ handleChange } 
        isDeposit={ isDeposit } 
        isBlank={ isBlank }
        isValid={ validTransaction } />
      </form>
    );
  };

export default Account;

