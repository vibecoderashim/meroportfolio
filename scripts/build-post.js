import fs from "node:fs";

// 1. Ensure dist directory exists
fs.mkdirSync("dist", { recursive: true });

// 2. Copy .output/public to dist
if (fs.existsSync(".output/public")) {
  fs.cpSync(".output/public", "dist", { recursive: true });
}

// 3. Copy .output/server to dist/server
if (fs.existsSync(".output/server")) {
  fs.cpSync(".output/server", "dist/server", { recursive: true });
}

// 4. Prerender static index.html into dist/index.html
if (fs.existsSync(".output/server/index.mjs")) {
  try {
    const prodPort = "3999";
    process.env.PORT = prodPort;
    await import("../.output/server/index.mjs");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const res = await fetch(`http://127.0.0.1:${prodPort}/`);
    if (res.ok) {
      const html = await res.text();
      fs.writeFileSync("dist/index.html", html, "utf-8");
      console.log("Successfully generated production dist/index.html (" + html.length + " bytes)");
    }
  } catch (err) {
    console.error("Warning: Failed to generate static dist/index.html:", err);
  } finally {
    process.exit(0);
  }
} else {
  process.exit(0);
}
