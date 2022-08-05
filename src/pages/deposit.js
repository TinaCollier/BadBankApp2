import { useContext } from 'react';
import UserContext from '../components/context';
import Card from '../components/card';

function Deposit(){
    const context = useContext(UserContext);
    return (
        <Card
        
        txtcolor="black"
        header="Deposit Page"
        title="Deposit"
        text="You can use this bank"
        body={( <img src="./images/family.jpg" className="img-fluid" alt="Responsive image" /> )}
        />
    );
}

export default Deposit;