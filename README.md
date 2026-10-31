# Movie Search

Next.js app for browsing a movie catalog and searching movies or TV series. Pages load one page of results from the API. The browser does not hold the full list.

## Prerequisites

- Node.js 20 or newer
- pnpm 11

## Setup

```bash
pnpm install
cp .env.example .env.local
```

`.env.example` points at the contract API:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:5080/api/v1
```

`pnpm dev` starts Next.js and a small forwarder on port 5080. The forwarder sends `/api/v1` to the local mock at `/api/mock/v1`, so the app works before a real API is running. Restart the dev server after you change `.env.local`.

To call the mock routes on port 3000 directly, set:

```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/mock/v1
```

Stop the forwarder before you start a real API on port 5080. Response shapes, trigger queries, and how to remove the mock are in [NOTES.md](./NOTES.md).

## Run

```bash
pnpm dev
```
- App: [http://localhost:3000](http://localhost:3000)
- API the UI calls: [http://localhost:5080/api/v1](http://localhost:5080/api/v1)

Open `/` for the movie catalog (9 movies per page). Open `/search` for movie search, or `/search?type=tv` for TV series. Search waits a short moment after you stop typing, then the server loads that page.

## Production

```bash
pnpm build
pnpm start
```

`pnpm start` serves the built app only. It does not start the port 5080 forwarder. Point `NEXT_PUBLIC_API_BASE_URL` at a running API before you build.

## Checks

```bash
pnpm typecheck
pnpm lint
```
