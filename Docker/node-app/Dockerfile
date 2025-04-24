

# -------------------------
# 🔧 Stage 1: Build Layer
# -------------------------
    FROM node:20-slim AS builder
    RUN apt-get update && \
    apt-get install -y openssl libssl-dev && \
    rm -rf /var/lib/apt/lists/*
    ARG DATABASE_URL
    ENV DATABASE_URL=${DATABASE_URL}
    WORKDIR /app
    COPY . .
    # Install dependencies
    COPY package*.json ./
    RUN npm ci
    
    # Copy app files
   
    
    # Generate Prisma client
    RUN npm run prisma
    
    # -------------------------
    # 🏁 Stage 2: Production Image
    # -------------------------
    FROM node:20-slim AS production
    RUN apt-get update && \
    apt-get install -y openssl libssl-dev && \
    rm -rf /var/lib/apt/lists/*
    ARG DATABASE_URL
    ENV DATABASE_URL=${DATABASE_URL}
    WORKDIR /app
    
    # Copy necessary files from builder
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/dist ./dist
    COPY --from=builder /app/prisma ./prisma
    
    # Set environment variables
    ENV NODE_ENV=production
    
    # Optional: Add a non-root user
    RUN addgroup appgroup && adduser --ingroup appgroup --disabled-password appuser
    USER appuser
    
    # Expose the application port
    EXPOSE 3001
    
    # Command to run the application
    CMD ["npm", "run", "prod"]