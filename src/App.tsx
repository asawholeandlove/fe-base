import { Button, Input } from "antd";
import EInput from "./components/antdBase/EInput";
import ESelect from "./components/antdBase/ESelect";
import EFormItem from "./components/antdBase/EFormItem";

function App() {
  return (
    <div className="m-10">
      <EFormItem label="Hehe" required>
        <EInput />
      </EFormItem>
    </div>
  );
}

export default App;
