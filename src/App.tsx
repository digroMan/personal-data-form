import "./App.css";
import { Form } from "./components/Form/Form";
import { LABELS } from "./constants";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

function App() {
  const [getStorage, setItemStorage] = useLocalStorage("formData");

  return <Form labels={LABELS} formData={getStorage} setFormData={setItemStorage} />;
}

export default App;
