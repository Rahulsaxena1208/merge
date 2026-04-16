Add-Type -AssemblyName System.Drawing
$inputFile = "c:\Users\NIELIT\Desktop\Punjabi University\finalpUI\finalpUI\public\jivesna_logo.png"
$outputFile = "c:\Users\NIELIT\Desktop\Punjabi University\finalpUI\finalpUI\public\jivesna_logo_resized.png"
try {
    $img = [System.Drawing.Image]::FromFile($inputFile)
    $newWidth = 500
    $newHeight = [int]($img.Height * ($newWidth / $img.Width))
    $resized = New-Object System.Drawing.Bitmap $newWidth, $newHeight
    $graphics = [System.Drawing.Graphics]::FromImage($resized)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $newWidth, $newHeight)
    $resized.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $resized.Dispose()
    $img.Dispose()
    Write-Output "Resized successfully."
} catch {
    Write-Output "Failed: $_"
}
