import { useState, useContext } from 'react';
import Card from '../context';
import { UserContext } from '../context';

function CreateAccount(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate( field, label ){
        if(!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }

    function handleCreate(){
        setShow(false);
        console.log( name, email, password);
        if (!validate( name, 'name' )) return;
        if (!validate( email, 'email' )) return;
        if (!validate( password, 'password' )) return;
        ctx.users.push({name,email,password,balance:100}); // issue with this
        
    }

    function clearForm(){
        console.log('clear form')
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }
    return (
        <Card 
        
        header="Create Account"
        status={ status }
        body={ show ? (
            <>
            Name<br/>
            <input 
            type="input" 
            className="form-control" 
            id="name" 
            placeholder="Enter Name" 
            value={ name } 
            onChange={ e => setName(e.currentTarget.value) } />
            <br/>
            Email<br/>
            <input 
            type="input" 
            className="form-control" 
            id="email" 
            placeholder="Enter Valid Email" 
            value={ email } 
            onChange={ e => setEmail(e.currentTarget.value) } />
            <br/>
            Password
            <input 
            type="input" 
            className="form-control" 
            id="password" 
            placeholder="Enter Password" 
            value={ password } 
            onChange={ e => setPassword(e.currentTarget.value) } />
            <br/>
            <button 
            type="submit" 
            className="btn btn-light"
            onClick={ handleCreate }>Create Account</button>
            </>
        ):(
            <>
            <h5>Success</h5>
            <button 
            type="submit" 
            className="btn btn-light" 
            onClick={ clearForm }>Add Another Account</button>
            </>
        )}
        />
    );
}

export default CreateAccount;