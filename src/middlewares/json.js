export async function json(req, res) {
  const contentType = req.headers["content-type"];
  if (contentType && contentType !== "application/json") {
    console.log("here");
    // if content type is defined and is not application/json, skip parsing
    return;
  }

  const buffers = [];

  for await (const chunk of req) {
    buffers.push(chunk);
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString());
  } catch {
    req.body = null;
  }

  res.setHeader("Content-Type", "application/json");
}
