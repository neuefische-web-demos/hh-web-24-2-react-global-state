import styled from "styled-components";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AnimalName = styled.strong`
  width: 5rem;
`;

export default function Counter({
  animalName,
  count,
  onIncrement,
  onDecrement,
}) {
  return (
    <Container>
      <AnimalName>{animalName}:</AnimalName>
      <button type="button" onClick={onDecrement}>
        <span role="img" aria-label="Subtract one from count">
          ➖
        </span>
      </button>
      <span>{count}</span>
      <button type="button" onClick={onIncrement}>
        <span role="img" aria-label="Add one to count">
          ➕
        </span>
      </button>
    </Container>
  );
}
