import "./App.css";
import Heading from "./components/Heading";
import { Section } from "./components/Section";
import { Counter } from "./components/Counter";
import { List } from "./components/List";

function App() {

  const listoffood: string[] = ["coffe", "pizza", "hamburguer"]

  return (
    <>
      <Heading title="Hello TS" />
      <Section title="Section Tittle">
        <p>Filho1</p>
        <p>Filho2</p>
      </Section>
      <Counter />

      <List items={listoffood} />
    </>
  );
}

export default App;
