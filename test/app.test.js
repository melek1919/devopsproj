const test = require('node:test');
const assert = require('node:assert');
const server = require('../server');

let base;
test.before(async () => {
  await new Promise((resolve) => server.listen(0, resolve));
  base = `http://127.0.0.1:${server.address().port}`;
});
test.after(() => server.close());

test('/health répond ok', async () => {
  const r = await fetch(`${base}/health`);
  assert.strictEqual(r.status, 200);
});

test('/boom renvoie 500', async () => {
  const r = await fetch(`${base}/boom`);
  assert.strictEqual(r.status, 500);
});
