import InfoBox from "../components/InfoBox";
import Navigation from "../components/Navigation";
import CounterList from "../components/CounterList";
import Link from "../components/Link";

export default function CountersPage({ counters, onChangeCounter }) {
  console.log("in page counters: ", counters);
  return (
    <>
      <Link href="/">← Back</Link>

      <CounterList counters={counters} onChangeCounter={onChangeCounter} />

      <InfoBox />

      <Navigation />
    </>
  );
}
