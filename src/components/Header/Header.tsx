import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  padding: 20px;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  margin-bottom: 10px;
  a {
    color: #1f6b5e;
    text-decoration: none;
    cursor: pointer;
  }
`;

const Header = () => {
  // Função para rolar suavemente até o elemento desejado
  const scrollToExercise = (exerciseId: string) => {
    const exerciseElement = document.getElementById(exerciseId);
    if (exerciseElement) {
      exerciseElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <a onClick={() => scrollToExercise("exercicio-1")}>Exercicio 1</a>
      <a onClick={() => scrollToExercise("exercicio-2")}>Exercicio 2</a>
      <a onClick={() => scrollToExercise("exercicio-3")}>Exercicio 3</a>
      <a onClick={() => scrollToExercise("exercicio-4")}>Exercicio 4</a>
      <a onClick={() => scrollToExercise("exercicio-5")}>Exercicio 5</a>
    </HeaderContainer>
  );
};

export default Header;
