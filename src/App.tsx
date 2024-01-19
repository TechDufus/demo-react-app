import Alert from "./components/Alert";
import Button from "./components/Button";


function App() {
    return (
        <div>
            <Alert>
                Hello, <strong>world</strong>!
            </Alert>
            <Button
                color="warning"
                text="Click me!"
                onClick={() => alert("You clicked me!")}
            >
            </Button>
        </div>
    );
}

export default App;
