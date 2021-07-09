import Item from './components/item';
import Card from './components/card/index';

function App() {
  return (
    <>
      <h1>Minha aplicação react</h1>
      <p>Legal. neh?</p>
      <Card></Card>
      <div className="list-group">
        <Item>Item 1</Item>
        <Item dark={true}>Item 2</Item>
        <Item>Item 3</Item>
      </div>
    </>
  );
}

export default App;
