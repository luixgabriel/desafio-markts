import styled from 'styled-components';

const ItemListContainer = styled.div`
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 50%;
`;

const Title = styled.h2`
  color: #333;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
`;

const List = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-bottom: 8px;
`;

const ItemList = ({ items }: {items: string[]}) => {
  return (
    <ItemListContainer>
      <Title>Lista de Itens</Title>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </ItemListContainer>
  );
};

export default ItemList;
