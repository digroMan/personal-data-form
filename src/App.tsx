import "./App.css";
import { Form } from "./components/Form/Form";
import { LABELS, REQUIRED, VALIDATION_TEXT } from "./constants";
import { verificationAge } from "./helpers";
import { useLocalStorage } from "./hooks/use-localstorage.hook";

function App() {
  const [getStorage, setItemStorage] = useLocalStorage("formData");

  return (
    <Form
      labels={LABELS}
      textValidation={VALIDATION_TEXT}
      handleAgeValidation={verificationAge}
      requiredSettings={REQUIRED}
      formData={getStorage}
      setFormData={setItemStorage}
    />
  );
}

export default App;
