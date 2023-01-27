import BasicForm from "./components/Forms/BasicForm";
import CustomForm from "./components/Forms/CustomForm";
import DisabledForm from "./components/Forms/DisabledForm";

function App() {
  return (
    <main className="main">
      <div className="container">
        <div className="grid">
          <BasicForm />
          <CustomForm />
          <DisabledForm />
        </div>
      </div>
    </main>
  );
}

export default App;
