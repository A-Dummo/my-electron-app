Write-Output 1
$PAT = Get-Content -Path ".\.env"
# echo $PAT
$Env:GITHUB_TOKEN = $PAT