import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

import { SeverityLevel } from "@microsoft/applicationinsights-web";
import { getAppInsights } from "../../services/Telemetry";
import TelemetryProvider from "../../providers/Telemetry";

import View from "containers/View";

import H1 from "components/H1";
import Paragraph from "components/Paragraph";

let appInsights = null;

function trackException() {
	appInsights.trackException({
		error: new Error("some error"),
		severityLevel: SeverityLevel.Error
	});
}

function trackTrace() {
	appInsights.trackTrace({
		message: "some trace",
		severityLevel: SeverityLevel.Information
	});
}

function trackEvent() {
	appInsights.trackEvent({ name: "some event" });
}

function throwError() {
	let foo = {
		field: { bar: "value" }
	};

	// This will crash the app; the error will show up in the Azure Portal
	return foo.fielld.bar;
}

function ajaxRequest() {
	let xhr = new XMLHttpRequest();
	xhr.open("GET", "https://httpbin.org/status/200");
	xhr.send();
}

function fetchRequest() {
	fetch("https://httpbin.org/status/200");
}

const ThisView = () => (
	<View title="Demo Site – This View">
		<Helmet>
			<meta property="og:site_name" content="Demo Site" />
			<meta property="og:title" content="Demo Site — ThisView" />
			<meta property="og:description" content="ThisView description." />
		</Helmet>

		<TelemetryProvider
			instrumentationKey="" // SET YOUR KEY HERE
			after={() => {
				appInsights = getAppInsights();
			}}
		>
			<H1>ThisView</H1>

			<button onClick={trackException}>Track Exception</button>
			<button onClick={trackEvent}>Track Event</button>
			<button onClick={trackTrace}>Track Trace</button>
			<button onClick={throwError}>Autocollect an Error</button>
			<button onClick={ajaxRequest}>
				Autocollect a Dependency (XMLHttpRequest)
			</button>
			<button onClick={fetchRequest}>Autocollect a dependency (Fetch)</button>

			<Paragraph>
				<Link to="/thatview">Link to ThatView</Link>
			</Paragraph>
		</TelemetryProvider>
	</View>
);

export default withRouter(ThisView);
