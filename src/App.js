import Finder from "./components/Finder";
import Info from "./components/Info"
import { DataContext, dataApi } from "./context/Context";
import { useState } from "react";

function App() {
  const [state, setState] = useState(dataApi)

  return (
    <div className="h-screen bg-gradient-to-l from-amber-300 to-amber-800">
      <DataContext.Provider value={{state, setState}}>
        <Finder />
        <Info />
      </DataContext.Provider>
    </div>
  );
}

export default App;
