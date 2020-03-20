export APP_NAME=LoggingAppDemo
export PLAN_NAME=LoggingAppDemoPlan
export LOCATION=westeurope
export RG_NAME=LoggingResourceGroup
export APP_TYPE=web

az group delete --name $RG_NAME

az monitor app-insights component delete --app $APP_NAME
  --resource-group $RG_NAME

az appservice plan delete --name $PLAN_NAME \
  --resource-group $RG_NAME

az webapp delete --name $APP_NAME \
  --resource-group $RG_NAME