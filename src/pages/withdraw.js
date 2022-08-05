import Card from '../context';

function Withdraw(){
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