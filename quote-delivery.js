/* Send a quotation only when a backend confirms delivery with {ok:true}.
   A SPA rewrite often returns HTTP 200 + HTML for missing endpoints; that is
   never proof that a customer's request was received. */
(function (root) {
  "use strict";

  function postQuote(payload, options) {
    var opts = options || {};
    var request = opts.fetch || (typeof root.fetch === "function" ? root.fetch.bind(root) : null);
    if (!request) return Promise.resolve(false);

    var controller = typeof root.AbortController === "function" ? new root.AbortController() : null;
    var configuredTimeout = Number(opts.timeoutMs);
    var timeoutMs = Number.isFinite(configuredTimeout) && configuredTimeout > 0 ? configuredTimeout : 12000;
    var timer = null;

    // Aborting is best effort: some fetch implementations and response bodies
    // ignore AbortSignal. The deadline must settle independently of abort.
    var deadline = new Promise(function (resolve) {
      timer = setTimeout(function () {
        if (controller) controller.abort();
        resolve(false);
      }, timeoutMs);
    });

    var delivery = Promise.resolve()
      .then(function () {
        return request("/.netlify/functions/devis", {
          method: "POST",
          headers: { "Content-Type": "application/json", "Accept": "application/json" },
          body: JSON.stringify(payload),
          signal: controller ? controller.signal : undefined
        });
      })
      .then(function (response) {
        if (!response || !response.ok || !response.headers ||
            !/application\/json/i.test(response.headers.get("content-type") || "")) {
          return false;
        }
        return response.json().then(function (receipt) {
          return !!(receipt && receipt.ok === true);
        });
      })
      .catch(function () { return false; });

    return Promise.race([delivery, deadline])
      .finally(function () { if (timer !== null) clearTimeout(timer); });
  }

  root.StevenQuoteDelivery = { postQuote: postQuote };
  if (typeof module !== "undefined" && module.exports) module.exports = { postQuote: postQuote };
})(typeof window !== "undefined" ? window : globalThis);
