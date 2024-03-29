import { useState } from "react";
import styled from "styled-components";

interface IFormData {
  username: string;
  password: string;
}

const ControlledFormContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    height: 200px;
    background: #f09431;
    border-radius: 20px;

    label {
      font-size: 25px;

      input {
        margin: 5px;
        border: none;
        outline: none;
        padding: 10px 20px;
        border-radius: 50px;
      }
    }
  }

  div {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background: #eeb06e;
    font-size: 20px;
    border-radius: 20px;
    padding: 20px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    h2{
      margin: 5px;
    }
    p {
      margin: 5px;
    }
  }
`;

const ControlledForm = () => {
  const [formData, setFormData] = useState<IFormData>({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <ControlledFormContainer>
      <form>
        <label>
          Usuário:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Senha:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
      </form>
      <div>
        <h2>Valores inseridos:</h2>
        <p>Usuário: {formData.username === '' ? 'Digite um usuário' : formData.username}</p>
        <p>Senha: {formData.password === '' ? 'Digite uma senha' : formData.password}</p>
      </div>
    </ControlledFormContainer>
  );
};

export default ControlledForm;
