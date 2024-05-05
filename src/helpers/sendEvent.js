const eventHubNamespace = "finalTest";
const sasKey =
  "Endpoint=sb://finaltest.servicebus.windows.net/;SharedAccessKeyName=sendInfo;SharedAccessKey=2+sDXGwcc6r0q35ekiKVLc2qwq7LpmWCM+AEhEbU1FY=";
const eventHubName = "eh-demo";
const url = `https://${eventHubNamespace}.servicebus.windows.net/${eventHubName}/messages?api-version=2014-01`;

async function sendEvent(data) {
  console.log(data);
  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `SharedAccessSignature ${sasKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Event sent successfully:", response);
    })
    .catch((error) => {
      console.error("Error sending event:", error);
    });
}

export default sendEvent;
