const test = require("node:test");
const assert = require("node:assert/strict");
const server = require("../src/app");

test("Application returns HTTP 200", async () => {
  await new Promise(resolve => server.listen(0, resolve));

  try {
    const port = server.address().port;
    const response = await fetch(`http://localhost:${port}`);
    const data = await response.json();

    assert.equal(response.status, 200);
    assert.equal(data.status, "success");
    assert.equal(data.message, "AWS Cloud-Native CI Pipeline");
  } finally {
    await new Promise((resolve, reject) => {
      server.close(err => err ? reject(err) : resolve());
    });
  }
});
