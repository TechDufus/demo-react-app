import Alert from "./components/Alert";
import Button from "./components/Button";

import { useState } from 'react';

function App() {
    const [alertVisible, setAlertVisibility] = useState(false);
    return (
        <div>
            {alertVisible && <Alert
                text="You clicked me!"
                onClose={() => setAlertVisibility(false)}
            ></Alert>}
            <Button
                color="warning"
                text="Click me!"
                onClick={() => setAlertVisibility(true)}
            />
        </div>
    );
}

export default App;
