# Build the Next.js app
echo "Building Next.js application..."
npm run build

# Build Docker image
echo "Building Docker image..."
docker build -t movie-web-app .

# Run the container
echo "Starting Docker container..."
docker-compose up -d

echo "Done! Your app is running at http://localhost:3000"
