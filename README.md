# Demo: Logging on Azure with Application Insights (React application)

This demo basically wraps the Microsoft demo already available at [https://github.com/Azure-Samples/application-insights-react-demo](https://github.com/Azure-Samples/application-insights-react-demo).

## Prerequisites

- You need an Azure account and a subscription
- You will run this in an App Service (Application Insights is only available there?)
- You have set your Application Insights instrumentation key in `src/containers/ThisView/index.jsx`, in the provider component.

## Running

For local development, run `yarn dev` or `npm run dev`.

## Building

To build, run `yarn build` or `npm run build`.

## Azure App Service: Linux Web Server support

It uses the strategy that Burke Holland writes about [here](https://burkeholland.github.io/posts/static-site-azure/) and demonstrates [here](https://github.com/burkeholland/dead-simple-vue-azure), using a `ecosystem.config.js` file to start a web server.

## Optional: Setting up resources

Run the provided shell script `azure-create.sh`.

## Deploying

Easiest is to use [Azure App Service extension for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azureappservice) and point to the resources you just created.

If you do it this way, the extension should be able to create all the required resources for you.

## Optional: Tear down resources

Run the provided shell script `azure-delete.sh`.

## Resources

- [Monitor your Node.js services and apps with Application Insights](https://docs.microsoft.com/en-us/azure/azure-monitor/app/nodejs)
- [Application Insights for web pages](https://docs.microsoft.com/en-us/azure/azure-monitor/app/javascript)
- [Application Insights SDK for Node.js part 1 : Basic usage](https://dev.to/kenakamu/application-insights-sdk-for-node-js-3ki1)
- [Working with Azure Application Insights in your React app](https://react.christmas/2019/11)
