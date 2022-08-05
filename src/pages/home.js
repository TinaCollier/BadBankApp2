import Card from '../context';

function Home(){
    return (
        <Card
        
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the bank"
        text="Thank you for choosing Bad Bank for all of your banking needs. Safe banking relies on you making good choices and decisions. You must first complete the Create Account Form prior to using your new account. Happy Banking!"
        body={( <img src={require("../images/family.jpg")}className="img-fluid" alt="Responsive image" /> )}
        />
    );
}

export default Home;