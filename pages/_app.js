import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component: PageComponent, pageProps }) {
  const [counters, setCounters] = useState([
    { id: 1, name: "Cats", count: 42 },
    { id: 2, name: "Dogs", count: 1337 },
    { id: 3, name: "Sheep", count: 0 },
    { id: 4, name: "Dragons", count: 0 },
  ]);

  function handleSetCounter(id, newValue) {
    if (newValue < 0) {
      return;
    }

    const mutatedCounters = counters.map((counter) => {
      if (counter.id !== id) {
        return counter;
      }

      return {
        ...counter,
        count: newValue,
      };
    });

    setCounters(mutatedCounters);
  }

  const dragonCount = counters.find((count) => count.name === "Dragons").count;
  // const countSum =
  //   counters[0].count +
  //   counters[1].count +
  //   counters[2].count +
  //   counters[3].count;

  const countSum = counters.reduce((acc, currentCounter) => {
    const newAcc = acc + currentCounter.count;
    return newAcc;
  }, 0);

  const countAverage = (countSum / counters.length).toFixed(2);

  return (
    <>
      <GlobalStyle />
      <Layout dragonCount={dragonCount} countSum={countSum}>
        <PageComponent
          {...pageProps}
          counters={counters}
          dragonCount={dragonCount}
          countSum={countSum}
          countAverage={countAverage}
          onChangeCounter={handleSetCounter}
        />
      </Layout>
    </>
  );
}
