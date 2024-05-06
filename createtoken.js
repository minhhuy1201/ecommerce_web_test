const crypto = require("crypto");

function createSharedAccessToken(uri, saName, saKey) {
  if (!uri || !saName || !saKey) {
    throw "Missing required parameter";
  }
  var encoded = encodeURIComponent(uri);
  var now = new Date();
  var week = 60 * 60 * 24 * 7;
  var ttl = Math.round(now.getTime() / 1000) + week;
  var signature = encoded + "\n" + ttl;
  var hash = crypto
    .createHmac("sha256", saKey)
    .update(signature, "utf8")
    .digest("base64");
  return (
    "SharedAccessSignature sr=" +
    encoded +
    "&sig=" +
    encodeURIComponent(hash) +
    "&se=" +
    ttl +
    "&skn=" +
    saName
  );
}

console.log(
  createSharedAccessToken(
    import.meta.env.VITE_URI,
    import.meta.env.VITE_SAS_NAME,
    import.meta.env.VITE_SAS_PRIMARY_KEY
  )
);
