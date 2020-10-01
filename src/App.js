import React from "react";
// import { SearchBar } from "./components/serachBar";
import "./App.css";
import AutoCompleteText from "./components/AutoCompleteText";
// import List from "./components/List";
import SearchBarFiltering from "./components/SearchBArFiltering";
const App = () => {
  // const [persons] = useState([
  //   { name: " Dayo nn", number: "+4671257632" },
  //   { name: " rtyrsd nn", number: "+659531" },
  //   { name: " Dayomkjo nn", number: "+257974315" },
  // ]);
  return (
    <div>
      SearchBar
      <div className="Auto-Component">
        {/* <AutoCompleteText /> */}
        {/* <List /> */}
        <SearchBarFiltering />
      </div>
      {/* <SearchBar persons={persons} /> */}
    </div>
  );
};

export default App;
