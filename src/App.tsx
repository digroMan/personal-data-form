import "./App.css";
import { Form } from "./components/Form/Form";
import { LABELS, VALIDATION_TEXT } from "./constants";

function App() {
  return <Form labels={LABELS} textValidation={VALIDATION_TEXT} />;
}

export default App;
