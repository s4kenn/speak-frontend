import "./App.css";
import { CoverDemo } from "./pages/CoverDemo";
import FAQS from "./pages/FAQ";
import SearchWithPagination from "./pages/SearchPagination";

function App() {
  return (
    <div>
      <CoverDemo />
      <div className="mt-28">
        <SearchWithPagination />
      </div>
      <div className="mt-28">
        <FAQS />
      </div>
    </div>
  );
}

export default App;
