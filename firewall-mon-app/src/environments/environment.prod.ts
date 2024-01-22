export const environment = {
  production: true,
  ApplicationInsightsConnectionString: "__APPLICATION_INSIGHTS_CONNECTION_STRING__",
  BuildDate: "__BUILDDATE__",
  AzureMapsSASKey: "__AZURE_MAPS_SAS_KEY__",
  EventsQueueLength: 100000,
  eventHubConnectionString: "Endpoint=sb://azurefirewallmonitor01.servicebus.windows.net/;SharedAccessKeyName=AzMonitorListener;SharedAccessKey=VfmdKclz0li59bc+vElsYtfN9IpLjTJWB+AEhIkz35A=;EntityPath=azmonitorcapture",
  eventHubConsumerGroup: "$Default",
  azureMapsSharedKey: "",
  isStartDisabled: false;
};
