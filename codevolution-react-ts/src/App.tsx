import "./App.css";
import { Profile } from "./components/auth/Profile";
import { Private } from "./components/auth/Private";
import Counter from "./components/class/Counter";
import { Box } from "./components/context/Box";
import { ThemeProvider } from "./components/context/ThemeContext";
import { User } from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { List } from "./components/generics/List";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Toast } from "./components/templateLiterals/Toast";
import { Button } from "./components/html/Button";

function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h1>React + TS + Codevolution</h1>
          <Box />
          <User />
          <DomRef />
          <MutableRef />
          <Counter message={"Count value is: "} />
          <Profile isLoggedIn={true} Component={Private} />
          
          <List
            items={[
              { id: 1, name: "felipe", lasname: "calais" },
              { id: 2, name: "joao", lasname: "kent" },
              { id: 3, name: "Ritalina", lasname: "Maria" },
            ]}
            onClick={(item) => console.log(item)}
          />
        
        <RandomNumber value={2} isPositive={true}  />
        <Toast position="center-bottom" />
        <Button variant='secondary' onClick={() => console.log('clicked')}>Teste</Button>
        </div>

      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
