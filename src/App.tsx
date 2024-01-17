import ListGroup from './components/ListGroup';

function App() {
    let items = [
        'New York',
        'Los Angeles',
        'Chicago',
        'Houston',
        'Phoenix',
        'Philadelphia',
    ];
    const handleSelectItem = (item: string) => {
        console.log(item + ' was selected');
    }


    return <div>
        <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem} />
    </div>;
}

export default App;
