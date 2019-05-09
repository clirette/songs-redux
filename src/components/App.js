import React from "react";

import SongList from "./SongList";
import SongDetails from "./SongDetails";

const App = () => {
  return (
    <div className="ui grid container">
      <div className="row">
        <div className="eight wide column">
          <SongList />
        </div>
        <div className="eight wide column">
          <SongDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
