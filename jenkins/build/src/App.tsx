import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import FileUpload from "./components/FileUpload";

const App: React.FC = () => {
  return (
    <div>
      <div className="bg-success p-2 text-white">
        <h4>TALYROND FILE UPLOAD</h4>
      </div>
      <div className="container" style={{ width: "500px" }}>
        <div>
          <div className="my-3">
            <h4>เลือกไฟล์ talyrond csv เท่านั้น</h4>
          </div>
          <FileUpload />
        </div>
      </div>
    </div>
  );
};
export default App;
