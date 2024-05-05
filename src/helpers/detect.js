async function getUserInformation() {
  return {
    timeStamp: new Date().toISOString(), // Timestamp when the script runs
    os: getOS(), // Operating system
    browser: getBrowser(), // Browser
    deviceType: getDeviceType(), // Device type
    ip: await findIP(), // IP address
  };
}

// Function to get OS
function getOS() {
  const userAgent = navigator.userAgent;
  let os = "Unknown";
  if (userAgent.indexOf("Windows") !== -1) os = "Windows";
  else if (userAgent.indexOf("Mac") !== -1) os = "Mac";
  else if (userAgent.indexOf("Linux") !== -1) os = "Linux";
  else if (userAgent.indexOf("Android") !== -1) os = "Android";
  else if (userAgent.indexOf("iOS") !== -1) os = "iOS";
  return os;
}

// Function to get browser
function getBrowser() {
  const userAgent = navigator.userAgent;
  let browser = "Unknown";
  if (userAgent.indexOf("Firefox") !== -1) browser = "Firefox";
  else if (userAgent.indexOf("Chrome") !== -1) browser = "Chrome";
  else if (userAgent.indexOf("Safari") !== -1) browser = "Safari";
  else if (userAgent.indexOf("Edge") !== -1) browser = "Edge";
  return browser;
}

// Function to get device type
function getDeviceType() {
  const userAgent = navigator.userAgent;
  if (userAgent.match(/Android/i)) return "Android";
  else if (userAgent.match(/iPhone|iPad|iPod/i)) return "iOS";
  else if (userAgent.match(/Windows Phone/i)) return "Windows Phone";
  else if (userAgent.match(/Mobile/i)) return "Mobile";
  else if (userAgent.match(/Tablet/i)) return "Tablet";
  else return "Desktop";
}

async function findIP() {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
}

export { getUserInformation, getOS, getBrowser, getDeviceType };
