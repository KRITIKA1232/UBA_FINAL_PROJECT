# PowerShell script to set up the font management project

Write-Host "Setting up Font Management Project..." -ForegroundColor Green

# Create .env file in backend directory
$envContent = @"
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=password
DB_NAME=fonts
NODE_ENV=development
PORT=3000
"@

$envPath = "backend\.env"
$envContent | Out-File -FilePath $envPath -Encoding UTF8

Write-Host "Created .env file in backend directory" -ForegroundColor Yellow

# Create fonts directory
$fontsDir = "backend\fonts"
if (!(Test-Path $fontsDir)) {
    New-Item -ItemType Directory -Path $fontsDir
    Write-Host "Created fonts directory at: $fontsDir" -ForegroundColor Yellow
    Write-Host "Please copy your downloaded Google fonts to this directory" -ForegroundColor Cyan
} else {
    Write-Host "Fonts directory already exists at: $fontsDir" -ForegroundColor Yellow
}

Write-Host "`nSetup completed! Next steps:" -ForegroundColor Green
Write-Host "1. Copy your downloaded Google fonts to: $fontsDir" -ForegroundColor Cyan
Write-Host "2. Run: docker-compose up --build" -ForegroundColor Cyan
Write-Host "3. After containers are running, run: cd backend && npm run seed" -ForegroundColor Cyan 