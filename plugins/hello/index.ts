// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { ChildProcess } from "child_process";
console.log("Plugin Path", process.execPath);

process.on("message", (m) => {
  console.log("Got message:", m);
  switch (m) {
    case "getHtml":
      (process as unknown as ChildProcess).send(
        "<html><body><h1>!Hello World</h1></body></html>"
      );
      break;
  }
});
