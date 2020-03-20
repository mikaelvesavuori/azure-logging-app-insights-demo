import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ApplicationInsights } from "@microsoft/applicationinsights-web";
import {
	ReactPlugin,
	withAITracking
} from "@microsoft/applicationinsights-react-js";
import App from "app";

const ClientSideApp = () => (
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

render(<ClientSideApp />, document.querySelector("#root"));
