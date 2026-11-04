param(
    [int]$Port = 4173,
    [switch]$NoBrowser
)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$mimeTypes = @{
    ".avif" = "image/avif"
    ".css" = "text/css; charset=utf-8"
    ".gif" = "image/gif"
    ".htm" = "text/html; charset=utf-8"
    ".html" = "text/html; charset=utf-8"
    ".ico" = "image/x-icon"
    ".jpeg" = "image/jpeg"
    ".jpg" = "image/jpeg"
    ".js" = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".map" = "application/json; charset=utf-8"
    ".mp4" = "video/mp4"
    ".pdf" = "application/pdf"
    ".png" = "image/png"
    ".svg" = "image/svg+xml"
    ".ttf" = "font/ttf"
    ".txt" = "text/plain; charset=utf-8"
    ".wasm" = "application/wasm"
    ".webm" = "video/webm"
    ".webp" = "image/webp"
    ".woff" = "font/woff"
    ".woff2" = "font/woff2"
    ".xml" = "application/xml; charset=utf-8"
}

$listener = $null
$selectedPort = $Port

for ($attempt = 0; $attempt -lt 50; $attempt += 1) {
    $candidatePort = $Port + $attempt
    $candidateListener = New-Object System.Net.HttpListener
    $candidateListener.Prefixes.Add("http://localhost:$candidatePort/")

    try {
        $candidateListener.Start()
        $listener = $candidateListener
        $selectedPort = $candidatePort
        break
    } catch {
        $candidateListener.Close()
    }
}

if ($null -eq $listener -or -not $listener.IsListening) {
    Write-Host "Could not start the local website server." -ForegroundColor Red
    Read-Host "Press Enter to close"
    exit 1
}

$url = "http://localhost:$selectedPort/"
Write-Host ""
Write-Host "DMV-GC website is running at $url" -ForegroundColor Green
Write-Host "Keep this window open while viewing the website." -ForegroundColor Yellow
Write-Host "Close this window to stop the server."
Write-Host ""

if (-not $NoBrowser) {
    Start-Process $url
}

$rootWithSeparator = $root.TrimEnd('\') + '\'

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        try {
            $requestPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)

            if ([string]::IsNullOrWhiteSpace($requestPath)) {
                $requestPath = "/"
            }

            if ($requestPath.Length -gt 1) {
                $requestPath = $requestPath.TrimEnd('/')
            }

            if ($requestPath -eq "/") {
                $requestPath = "/index.html"
            }

            $relativePath = $requestPath.TrimStart('/').Replace('/', [System.IO.Path]::DirectorySeparatorChar)
            $candidate = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $relativePath))

            if (-not $candidate.StartsWith($rootWithSeparator, [System.StringComparison]::OrdinalIgnoreCase)) {
                $response.StatusCode = 403
                $body = [System.Text.Encoding]::UTF8.GetBytes("Forbidden")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $body.Length

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($body, 0, $body.Length)
                }

                continue
            }

            $filePath = $null

            if (Test-Path -LiteralPath $candidate -PathType Leaf) {
                $filePath = $candidate
            } elseif (Test-Path -LiteralPath "$candidate.html" -PathType Leaf) {
                $filePath = "$candidate.html"
            } elseif (Test-Path -LiteralPath $candidate -PathType Container) {
                $indexPath = [System.IO.Path]::Combine($candidate, "index.html")

                if (Test-Path -LiteralPath $indexPath -PathType Leaf) {
                    $filePath = $indexPath
                }
            }

            if ($null -eq $filePath) {
                $notFoundPath = [System.IO.Path]::Combine($root, "404.html")

                if (Test-Path -LiteralPath $notFoundPath -PathType Leaf) {
                    $filePath = $notFoundPath
                    $response.StatusCode = 404
                } else {
                    $response.StatusCode = 404
                    $body = [System.Text.Encoding]::UTF8.GetBytes("Page not found")
                    $response.ContentType = "text/plain; charset=utf-8"
                    $response.ContentLength64 = $body.Length

                    if ($request.HttpMethod -ne "HEAD") {
                        $response.OutputStream.Write($body, 0, $body.Length)
                    }

                    continue
                }
            }

            $extension = [System.IO.Path]::GetExtension($filePath).ToLowerInvariant()

            if ($mimeTypes.ContainsKey($extension)) {
                $response.ContentType = $mimeTypes[$extension]
            } else {
                $response.ContentType = "application/octet-stream"
            }

            $response.Headers["X-Content-Type-Options"] = "nosniff"

            if ($extension -eq ".html") {
                $response.Headers["Cache-Control"] = "no-cache"
            } else {
                $response.Headers["Cache-Control"] = "public, max-age=31536000, immutable"
            }

            $fileInfo = New-Object System.IO.FileInfo($filePath)
            $response.ContentLength64 = $fileInfo.Length

            if ($request.HttpMethod -ne "HEAD") {
                $fileStream = [System.IO.File]::OpenRead($filePath)

                try {
                    $fileStream.CopyTo($response.OutputStream)
                } finally {
                    $fileStream.Dispose()
                }
            }
        } catch {
            try {
                $response.StatusCode = 500
                $body = [System.Text.Encoding]::UTF8.GetBytes("Internal server error")
                $response.ContentType = "text/plain; charset=utf-8"
                $response.ContentLength64 = $body.Length

                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($body, 0, $body.Length)
                }
            } catch {
            }
        } finally {
            try {
                $response.OutputStream.Close()
            } catch {
            }

            try {
                $response.Close()
            } catch {
            }
        }
    }
} finally {
    try {
        $listener.Stop()
    } catch {
    }

    try {
        $listener.Close()
    } catch {
    }
}
