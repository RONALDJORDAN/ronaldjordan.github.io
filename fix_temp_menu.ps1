foreach ($p in @('P:\semed-smc\404.html', 'P:\semed-smc\404_temp.html')) {
  $lines = Get-Content -Path $p
  $newLines = @($lines[0..110] + $lines[123..($lines.Count - 1)])
  $out = ($newLines -join "`r`n")
  Set-Content -Path $p -Value $out -NoNewline
}
