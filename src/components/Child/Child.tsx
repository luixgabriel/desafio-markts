import Button from "../Button/Button";

const Child = ({incrementNumber}: {incrementNumber: ()=> void}) => {
    return (
        <div>
          <Button onClick={incrementNumber}>Incrementar Número no Parent</Button>
        </div>
      );
}

export default Child
