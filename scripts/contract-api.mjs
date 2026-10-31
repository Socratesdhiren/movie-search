import http from "node:http"

const PORT = 5080
const TARGET = "http://127.0.0.1:3000"

export function startContractApi() {
  const server = http.createServer((req, res) => {
    const incoming = new URL(req.url ?? "/", "http://127.0.0.1")
    const path =
      incoming.pathname.replace(/^\/api\/v1(?=\/|$)/, "/api/mock/v1") +
      incoming.search

    const proxyReq = http.request(
      `${TARGET}${path}`,
      {
        method: req.method,
        headers: {
          ...req.headers,
          host: "127.0.0.1:3000",
        },
      },
      (proxyRes) => {
        res.writeHead(proxyRes.statusCode ?? 502, proxyRes.headers)
        proxyRes.pipe(res)
      }
    )

    proxyReq.on("error", () => {
      if (res.headersSent) {
        res.end()
        return
      }
      res.writeHead(502, { "content-type": "application/json" })
      res.end(JSON.stringify({ message: "Movie API is unavailable" }))
    })

    req.pipe(proxyReq)
  })

  server.listen(PORT, "127.0.0.1")
  return server
}

if (process.argv[1] && import.meta.url.endsWith(process.argv[1])) {
  startContractApi()
  console.log(`Contract API listening on http://127.0.0.1:${PORT}/api/v1`)
}
