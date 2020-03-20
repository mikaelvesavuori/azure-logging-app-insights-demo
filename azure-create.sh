export APP_NAME=LoggingAppDemo
export PLAN_NAME=LoggingAppDemoPlan
export LOCATION=westeurope
export RG_NAME=LoggingResourceGroup
export APP_TYPE=web
export RUNTIME=node|10.15

az extension add -n application-insights

az group create --location $LOCATION \
  --name $RG_NAME \
  --tags $TAGS

az monitor app-insights component create \
  --app $APP_NAME \
  --application-type $APP_TYPE \
  --kind $APP_TYPE \
  --location $LOCATION \
  --resource-group $RG_NAME \
  --tags Purpose="LoggingDemo"

az appservice plan create --name $PLAN_NAME \
  --sku F1 #B1

az webapp create --name $APP_NAME \
  --plan $PLAN_NAME \
  --runtime $RUNTIME \
  --resource-group $RG_NAME
