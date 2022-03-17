import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is Fun" },
  { id: "q2", author: "John", text: "Learning ML is Fun" },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};

export default AllQuotes;
