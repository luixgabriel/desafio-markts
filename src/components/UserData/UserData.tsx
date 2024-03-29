import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LoadingIcon from '../LoadingIcon/LoadingIcon';


interface UserDataResponse {
  name: string;
  email: string;
  age: number;
  city: string;
}

const UserDataContainer = styled.div`
  border: 1px solid #000;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 15px;

    p {
      padding: 2px;
      font-size: 18px;
    }
  }
`;

const UserData = () => {
  const [userData, setUserData] = useState<UserDataResponse | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await new Promise<UserDataResponse>((userData) =>
        setTimeout(() => {
          userData({
            name: 'Danilo Nunes',
            email: 'danilo.nunes@gmail.com',
            age: 25,
            city: 'Nova Iguaçu'
          });
        }, 6000)
      );
      setUserData(response);
    };

    fetchUserData();

  }, []);

  return (
    <UserDataContainer>
      <h2>Dados do usuário:</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Idade: {userData.age}</p>
          <p>Cidade: {userData.city}</p>
        </div>
      ) : (
        <LoadingIcon />
      )}
    </UserDataContainer>
  );
};

export default UserData;
