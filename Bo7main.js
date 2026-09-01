function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src + "?v=" + Date.now();
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

(async () => {
  await loadScript("Bo7Weapons.js");
  await loadScript("attachments.js");
  await loadScript("script.js");
})();