import { useContext } from 'react';
import UserContext from '../components/context';
import Card from '../components/card';

function Withdraw(){
    const context = useContext(UserContext);
    return (
        <Card
        
        txtcolor="black"
        header="Withdraw Page"
        title="Withdraw"
        text="You can use this bank"
        body={( <img src="./images/family.jpg" className="img-fluid" alt="Responsive image" /> )}
        />
    );
}

export default Withdraw;