import { useContext } from 'react';
import UserContext from '../components/context';
import Card from '../components/card';
import Transactions from '../components/transactions';
import Account from '../components/balance';
function AllData(){
    const context = useContext(UserContext);
    return (
        <div>
        <Card
        id="alldata"
        txtcolor="black"
        header="All Data"
        title="All Transactions"
        text="Below you will find all recent transactions. Please contact support if you find any discrepancies."
        body={( <Transactions /> )}
        >
            
        </Card>

        </div>
    );
}

export default AllData;