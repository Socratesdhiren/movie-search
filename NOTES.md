# Movie Search notes

The UI talks only to `NEXT_PUBLIC_API_BASE_URL`. `.env.local` is set to `http://localhost:5080/api/v1`. `pnpm dev` also starts a small server on port 5080 that forwards `/api/v1` to the local mock at `/api/mock/v1`, so the contract URL works before the real backend exists. Stop that forwarder before starting the real API on port 5080.

## Mock

Route handlers under `app/api/mock/v1/` return the fixtures in `mock/`. No TMDB API calls. Delete `app/api/mock` and `mock/` when the real API is wired up.

The fixture is 100 movies. Search pages hold three movies, so `batman` covers four pages.

Posters and backdrops are TMDB image paths. The app prefixes them with `https://image.tmdb.org/t/p/`. That is an image URL, not an API call.

## Response shapes

`GET /movies/trending` returns `Movie[]`.

`GET /movies/search?query={query}&page={page}` returns:

```json
{
  "page": 1,
  "totalPages": 4,
  "totalResults": 10,
  "results": []
}
```

`page` defaults to 1. `GET /movies/{id}` returns one movie. `GET /movies/{id}/videos` returns:

```json
{
  "id": 155,
  "results": [
    {
      "id": "video-155-trailer",
      "key": "EXeTwQWrcwY",
      "name": "The Dark Knight — Trailer",
      "site": "YouTube",
      "type": "Trailer",
      "official": true
    }
  ]
}
```

Errors are `{ "message": "..." }` with the HTTP status below.

`overview`, `posterPath`, `backdropPath`, and `releaseDate` may be null. Batman & Robin (`415`) has a null overview and no videos.

## Cases to try

| What you want | How |
| --- | --- |
| Movie catalog, 9 per page | Open `/` or `/?page=2` |
| TV series search | Open `/search?type=tv&query=breaking%20bad` |
| Four pages of results | Search `batman`, or open `/search?query=batman&page=2` |
| A shorter match | Search `dark` |
| No results | Search `noresults` |
| About a 3 second wait, then 3 movies | Search `slow` |
| 503, then the search error screen | Search `error` |
| 400, empty query | Open `/search` or `/search?query=` |
| 400, page out of range | Open `/search?query=batman&page=9` |
| Movie and trailer | Open `/movies/155` (also `414906`, `49026`) |
| Movie with no videos | Open `/movies/415` |
| 404 | Open `/movies/999999` |

`slow`, `error`, and `noresults` are exact queries. They are not title searches.

Search loading and errors use `app/search/loading.tsx` and `app/search/error.tsx`, the same route-level pattern as trending (`app/loading.tsx`, `app/error.tsx`). In `next dev`, the error screen includes the API `message`.
