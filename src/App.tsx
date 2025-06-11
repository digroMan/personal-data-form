import { Form } from "./components/Form/Form";
import { LABELS } from "./constants";

function App() {
  return <Form labels={LABELS} localStorageKey='formData' />;
}

export default App;
