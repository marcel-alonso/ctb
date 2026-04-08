# OpenClaude Windows Installer Script
# Run this script in PowerShell as Administrator

Write-Host "Checking prerequisites..." -ForegroundColor Cyan

# Check for Node.js
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node -v
    Write-Host "Found Node.js: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "Node.js not found. Please install Node.js v20+ from https://nodejs.org/" -ForegroundColor Red
    exit
}

# Check for Ripgrep
if (Get-Command rg -ErrorAction SilentlyContinue) {
    Write-Host "Found Ripgrep." -ForegroundColor Green
} else {
    Write-Host "Ripgrep (rg) not found. Attempting to install via Scoop/Choco..." -ForegroundColor Yellow
    if (Get-Command scoop -ErrorAction SilentlyContinue) {
        scoop install ripgrep
    } elseif (Get-Command choco -ErrorAction SilentlyContinue) {
        choco install ripgrep -y
    } else {
        Write-Host "Neither Scoop nor Chocolatey found. Please install ripgrep manually." -ForegroundColor Red
        Write-Host "Download: https://github.com/BurntSushi/ripgrep/releases" -ForegroundColor Gray
    }
}

# Install OpenClaude
Write-Host "Installing OpenClaude globally..." -ForegroundColor Cyan
npm install -g @gitlawb/openclaude

if ($LASTEXITCODE -eq 0) {
    Write-Host "OpenClaude installed successfully!" -ForegroundColor Green
    Write-Host "`nTo configure your API Key, run:" -ForegroundColor Cyan
    Write-Host '$env:OPENAI_API_KEY = "your-key-here"'
    Write-Host 'openclaude'
} else {
    Write-Host "Installation failed. Check the errors above." -ForegroundColor Red
}
