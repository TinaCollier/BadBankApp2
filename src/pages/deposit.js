import Card from '../components/context';

function Deposit(){
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