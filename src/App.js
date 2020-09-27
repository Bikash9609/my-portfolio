import React from "react";

import Layout from "./containers/Layout/Layout";

function App() {
	return (
		<div>
			<Layout />
			<h5 className="errorMessage">
				Mobile version under development. Open this website in desktop mode.
			</h5>
		</div>
	);
}

export default App;
