import styled from "styled-components";
import Counter from "./Counter";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0 0 1rem 0;
  gap: 1rem;
`;

export default function CounterList({ counters, onChangeCounter }) {
  return (
    <>
      <h2>Counters</h2>
      <List>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            animalName={counter.name}
            count={counter.count}
            onIncrement={() => {
              onChangeCounter(counter.id, counter.count + 1);
            }}
            onDecrement={() => {
              onChangeCounter(counter.id, counter.count - 1);
            }}
          />
        ))}
      </List>
    </>
  );
}
