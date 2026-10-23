const test = require("node:test");
const assert = require("node:assert/strict");
const { postQuote } = require("../quote-delivery.js");

function answer({ ok = true, type = "application/json", receipt = { ok: true } } = {}) {
  return {
    ok,
    headers: { get: (key) => key.toLowerCase() === "content-type" ? type : null },
    json: async () => receipt
  };
}

test("confirms delivery only after backend returns explicit JSON receipt", async () => {
  const payload = { name: "Cliente", phone: "0600000000" };
  let called = false;
  const sent = await postQuote(payload, {
    fetch: async (url, options) => {
      called = true;
      assert.equal(url, "/.netlify/functions/devis");
      assert.equal(options.method, "POST");
      assert.deepEqual(JSON.parse(options.body), payload);
      assert.equal(options.headers.Accept, "application/json");
      return answer();
    }
  });
  assert.equal(called, true);
  assert.equal(sent, true);
});

test("rejects HTTP 200 HTML returned by a SPA rewrite", async () => {
  const result = await postQuote({}, {
    fetch: async () => answer({ type: "text/html", receipt: { ok: true } })
  });
  assert.equal(result, false);
});

test("rejects HTTP error and JSON without explicit delivery confirmation", async () => {
  assert.equal(await postQuote({}, { fetch: async () => answer({ ok: false }) }), false);
  assert.equal(await postQuote({}, { fetch: async () => answer({ receipt: { status: "ok" } }) }), false);
  assert.equal(await postQuote({}, { fetch: async () => answer({ receipt: { ok: false } }) }), false);
});

test("network errors do not claim the request was sent", async () => {
  assert.equal(await postQuote({}, { fetch: async () => { throw new Error("offline"); } }), false);
});

test("requests are aborted when the server never responds", async () => {
  let aborted = false;
  const sent = await postQuote({}, {
    timeoutMs: 10,
    fetch: (_, options) => new Promise((_, reject) => {
      options.signal.addEventListener("abort", () => {
        aborted = true;
        reject(new Error("aborted"));
      }, { once: true });
    })
  });
  assert.equal(aborted, true);
  assert.equal(sent, false);
});

test("missing browser fetch falls back to an unsent state", async () => {
  const previous = globalThis.fetch;
  try {
    globalThis.fetch = undefined;
    assert.equal(await postQuote({}), false);
  } finally {
    globalThis.fetch = previous;
  }
});
