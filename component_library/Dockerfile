# Step 1: Build the Storybook static site
FROM node:20-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build-storybook

# Stage 2: Serve with nginx
FROM nginx:alpine

WORKDIR /mcewan_cera_ui_garden_build_checks

COPY --from=builder /app/storybook-static ./

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]
