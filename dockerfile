# Usa Node 20 Alpine como base
FROM node:20-alpine AS base

# Instalar dependencias necesarias (libc6-compat es necesario a veces en Alpine)
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json package-lock.json* ./
# Instalar dependencias
RUN npm ci

# Reconstruir el código fuente
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Deshabilitar telemetría de Next.js durante el build
ENV NEXT_TELEMETRY_DISABLED 1

# Construir el proyecto
RUN npm run build

# Imagen de producción, copia solo los archivos necesarios
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copia la carpeta public y .next/static
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copia la salida standalone (asegurate de haber puesto output: 'standalone' en next.config.js)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]