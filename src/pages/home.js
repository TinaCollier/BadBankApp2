import Card from '../context';

function Home(){
    return (
        <Card
        bgcolor="primary"
        txtcolor="black"
        header="BadBank Landing Page"
        title="Welcome to the bank"
        text="You can use this bank"
        body={( <img src="./images/family.jpg" className="img-fluid" alt="Responsive image" /> )}
        />
    );
}

export default Home;