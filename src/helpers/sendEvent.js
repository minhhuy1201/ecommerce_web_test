import axios from "axios";

const eventHubNamespace = import.meta.env.VITE_EVENT_HUB_NAMESPACE;
const sasKey = import.meta.env.VITE_SAS_KEY;
const eventHubName = import.meta.env.VITE_EVENT_HUB_NAME;
const url = import.meta.env.VITE_SEND_URL;

async function sendEvent(data) {
  console.log(data);
  try {
    const response = await axios.post(
      `https://${eventHubNamespace}.servicebus.windows.net/${eventHubName}/messages`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `${sasKey}`,
          // Add any other required headers here
        },
      }
    );
    console.log(`Event sent: Message = ${data}`);
    // Handle success
  } catch (error) {
    console.error("Error sending event:", error);
    // Handle error
  }
}

export default sendEvent;
