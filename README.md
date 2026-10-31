# crococoder-status

API interne exposant l'état des services de formation CrocoCoder.

## Routes
| Route | Description |
|---|---|
| `/` | nom et version |
| `/health` | sonde de santé (`ok`) |
| `/version` | version de l'application |
| `/metrics` | métriques Prometheus |
| `/boom` | renvoie volontairement une erreur 500 |
| `/ui` | petit frontend de démonstration |

## Lancement local
```bash
npm install
npm test
APP_VERSION=1.0.0 npm start      # http://localhost:3000/ui
```

## Docker
```bash
docker build -t crococoder-status:dev .
docker run -d -p 3000:3000 -e APP_VERSION=dev crococoder-status:dev
curl localhost:3000/health
docker exec <id> id                # uid=1000(node) : non-root
```
