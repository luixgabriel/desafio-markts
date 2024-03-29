import styled from "styled-components";
import ItemList from "./components/ItemList/ItemList";
import Counter from "./components/Counter/Counter";
import Parent from "./components/Parent/Parent";
import ControlledForm from "./components/ControlledForm/ControlledForm";
import UserData from "./components/UserData/UserData";
import Header from "./components/Header/Header";

const MainSection = styled.section`
  display: flex;
  flex-direction: column;

  h1 {
    padding: 5px 30px;
    margin-bottom: 30px;
    color: #fe9c34;
  }
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 15px;
  border-radius: 15px;
  height: 100vh;
`;

function App() {
  const MarketItems: string[] = ["Pão", "Queijo", "Leite", "Sabão", "Shampoo"];
  return (
    <MainSection>
      <Header />
      <MainDiv>
        <h1 id="exercicio-1">Exercicio 1, Componente de Lista:</h1>
        <ItemList items={MarketItems} />
      </MainDiv>
      <MainDiv>
        <h1 id="exercicio-2">Exercicio 2, Contador:</h1>
        <Counter />
      </MainDiv>
      <MainDiv>
        <h1 id="exercicio-3">Exercicio 3, Comunicação de Componentes:</h1>
        <Parent />
      </MainDiv>
      <MainDiv>
        <h1 id="exercicio-4">Exercicio 4, Formulário Controlado:</h1>
        <ControlledForm />
      </MainDiv>
      <MainDiv>
        <h1 id="exercicio-5">Exercicio 5, Requisição de dados:</h1>
        <UserData />
      </MainDiv>
    </MainSection>
  );
}

export default App;
