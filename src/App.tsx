import { TestimotialItem } from "./components/TestimonialItem";

function App() {
  return (
    <div className="p-10 App">
      <TestimotialItem />
      <a
        className="block shadow bg-green-600 text-white p-4 mt-5 rounded-xl text-center hover:bg-green-500"
        href="www.google.com"
      >
        Subscribe
      </a>
    </div>
  );
}

export default App;
