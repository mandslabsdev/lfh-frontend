# lfh-frontend

Tienda en línea de La Farmacia Homeopática.

## Stack

- Next.js 16.4.6 (App Router, SSR) · React 19.3
- TypeScript · Tailwind CSS 4
- Consume la API REST de `lfh-backend`

## Requisitos

- Node.js 24 LTS (mínimo 20.9)

## Arrancar en local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abre http://localhost:3000. Health check: http://localhost:3000/api/health

## Scripts

| Comando | Uso |
|---|---|
| `npm run dev` | Desarrollo con recarga en caliente |
| `npm run build` | Build de producción (salida `standalone`) |
| `npm run start` | Servir el build |
| `npm run lint` | ESLint |

## Variables de entorno

| Variable | Uso |
|---|---|
| `API_URL` | URL del backend para el SSR (red interna en AWS) |
| `NEXT_PUBLIC_API_URL` | URL del backend expuesta al navegador |

## Estructura

```
src/
├── app/            # Rutas (App Router), layout y estilos globales
│   └── api/health  # Health check para el balanceador
└── lib/api.ts      # Cliente de la API REST
```

## Contenedor

```bash
docker build -t lfh-frontend .
docker run -p 3000:3000 lfh-frontend
```
