# === CONFIG ===
$scriptDir    = Split-Path -Parent $MyInvocation.MyCommand.Definition
$outputDir    = Join-Path $scriptDir "images"
$outputFormat = "-tpng"   # change to -tsvg if you want SVG

# === Clean and recreate output root ===
if (Test-Path $outputDir) {
    Remove-Item -Recurse -Force $outputDir
}
New-Item -ItemType Directory -Path $outputDir | Out-Null

Write-Host "Rendering .puml files from $scriptDir into $outputDir ..."

# === Process each .puml file ===
Get-ChildItem -Path $scriptDir -Recurse -Filter *.puml | ForEach-Object {
    # Skip style/include files
    if ($_.Extension -eq ".iuml") { return }

    # Compute relative path from scriptDir
    $relativePath = $_.FullName.Substring($scriptDir.Length).TrimStart('\')
    $relativeDir  = Split-Path $relativePath -Parent

    # Build target directory under "images"
    $targetDir = Join-Path $outputDir $relativeDir
    if (-not (Test-Path $targetDir)) {
        New-Item -ItemType Directory -Path $targetDir -Force | Out-Null
    }

    # Run PlantUML to generate image into targetDir
    # Output filename will match the .puml filename automatically
    Write-Host "Processing $($_.FullName) -> $targetDir"
    plantuml $outputFormat -o $targetDir $_.FullName
}

Write-Host "✅ All diagrams rendered to $outputDir"
