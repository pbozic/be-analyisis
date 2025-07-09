# -------------------------
# 🔧 Stage 1: Build Layer
# -------------------------
    FROM node:20-bullseye AS builder

    # Install build dependencies for wkhtmltopdf and Prisma + canvas
    RUN apt-get update && apt-get install -y --no-install-recommends \
        curl \
        xz-utils \
        fontconfig \
        libxrender1 \
        libxext6 \
        libfreetype6 \
        libjpeg62-turbo \
        fonts-dejavu-core fonts-liberation \
        python3 \
        make \
        g++ \
        libcairo2-dev \
        libjpeg-dev \
        libpango1.0-dev \
        libgif-dev \
        librsvg2-dev \
        libssl-dev \
        openssl \
        ca-certificates \
     && rm -rf /var/lib/apt/lists/*
    
    # Install wkhtmltopdf
RUN curl -fSL -o wkhtmltox.deb https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb && \
    apt-get update && apt-get install -y ./wkhtmltox.deb && \
    rm wkhtmltox.deb

    
    # Set working directory
    WORKDIR /app
    
    # Copy and install dependencies
    COPY package*.json ./
    COPY setup-aliases.js install-wkhtmltopdf.js ./
    RUN npm ci
    
    # Copy rest of the app
    COPY . .
    
    # Generate Prisma client
    ARG DATABASE_URL
    ENV DATABASE_URL=$DATABASE_URL
    RUN npm run prisma
    
    # -------------------------
    # 🏁 Stage 2: Production Image
    # -------------------------
    FROM node:20-bullseye AS production
    
    # Install runtime dependencies
    RUN apt-get update && apt-get install -y --no-install-recommends \
        curl \
        xz-utils \
        fontconfig \
        libxrender1 \
        libxext6 \
        libfreetype6 \
        libjpeg62-turbo \
        fonts-dejavu-core fonts-liberation \
        ca-certificates \
     && rm -rf /var/lib/apt/lists/*
    
    # Install wkhtmltopdf
    RUN curl -fSL -o wkhtmltox.deb https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6.1-2/wkhtmltox_0.12.6.1-2.bullseye_amd64.deb && \
    apt-get update && apt-get install -y ./wkhtmltox.deb && \
    rm wkhtmltox.deb
    
    # Create app user
    RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser
    
    WORKDIR /app
    
    # Copy app build from builder
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/dist ./dist
    COPY ./prisma ./prisma
    COPY --from=builder /app/package.json ./package.json
    COPY --from=builder setup-aliases.js install-wkhtmltopdf.js ./
    # Use non-root user
    USER appuser
    
    # Set environment
    ENV NODE_ENV=production
    ARG DATABASE_URL
    ENV DATABASE_URL=${DATABASE_URL}
    
    EXPOSE 3001
    
    CMD ["npm", "run", "prod"]
    