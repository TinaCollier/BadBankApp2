import { useState, useContext } from 'react';
import validate from '../components/LoginFormValidationRules';
import Card from '../components/context';
import useForm from '../components/useForm';
//import { UserContext } from './components/context';

function CreateAccount(){
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //const ctx = useContext(UserContext);
    const {
        values,
        errors,
        handleChange,
        handleSubmit
    } = useForm( login, validate)
    
    function login(){
        console.log('No errors, submit callback called!')
    }


    function handleCreate(){
        
        console.log( name, email, password);
        if (!validate( values.name, 'name' )) return;
        if (!validate( values.email, 'email' )) return;
        if (!validate( values.password, 'password' )) return;
        //ctx.users.push({name,email,password,balance:100}); // issue with this
        setShow(false);
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
            <form onSubmit={ handleSubmit }>
            Name<br/>
            <input 
            type="input" 
            className="form-control" 
            id="name" 
            placeholder="Enter Name" 
            value={ values.name } 
            onChange={ handleChange } required/>
            <br/>
            Email<br/>
            <input 
            type="email" 
            className="form-control" 
            id="email" 
            placeholder="Enter Valid Email" 
            value={ values.email } 
            onChange={ handleChange } required/>
            <br/>
            Password
            <input 
            type="input" 
            className="form-control" 
            id="password" 
            placeholder="Enter Password" 
            value={ values.password } 
            onChange={ handleChange } required/>
            <br/>
            <button 
            type="submit" 
            className="btn btn-light"
            onClick={ handleCreate }>Create Account</button>
            </form>
        ):(
            <form>
            <h5>Success</h5>
            <button 
            type="submit" 
            className="btn btn-light" 
            onClick={ clearForm }>Add Another Account</button>
            </form>
        )}
        />
    );
}

export default CreateAccount;