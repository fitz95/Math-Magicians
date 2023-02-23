import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Navbar />
      <div className="mainhome">
        <h1>Welcome To OUr Page</h1>
        <div className="todos">
          <p>
            Welcome to our Calculator App and Use it to do all your Calculations
            and be sure to have alwasy the correct answer as our calculator is
            so reliable it even predicts the calculation that is in your head
            activities Calculator provides simple and advanced mathematical
            functions in a beautifully designed app.
            <br />
            <br />
            <br />
            • Perform basic
            calculations such as addition, subtraction, multiplication, and
            division
            <br />
            <br />
            • Get Fast results and promptly
            <br />
            <br />
            • Display screen to see all Calculations
            <br />
            <br />
            • Nice Calculator UI
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
