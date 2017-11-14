import {sayHello }from "hybrid";
import path from "path";

function run(): void {
  console.log("ESM is getting real");
  console.log(path.posix.join("i", "can", "use", "cjs", "modules"));
  console.log("And hybrid modules:");
  console.log(sayHello());
}

run();
