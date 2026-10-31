import { spawn } from "node:child_process"
import { startContractApi } from "./contract-api.mjs"

const api = startContractApi()
const next = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev"],
  { stdio: "inherit", env: process.env }
)

function stop(signal) {
  api.close()
  next.kill(signal)
}

process.on("SIGINT", () => stop("SIGINT"))
process.on("SIGTERM", () => stop("SIGTERM"))

next.on("exit", (code, signal) => {
  api.close()
  if (signal) {
    process.kill(process.pid, signal)
    return
  }
  process.exit(code ?? 0)
})
