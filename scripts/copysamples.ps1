Write-Output "copying samples text to public folder"
Remove-Item .\public\samples\*.* -Force
Copy-Item .\src\components\samples\*.tsx .\public\samples
Get-ChildItem .\public\samples\*.tsx | Rename-Item -NewName { $_.name -Replace '\.tsx$', '.txt' } -Force
(get-content .\public\samples\*.txt | select-string -pattern '//trim' -notmatch) | Out-File .\public\samples\*.txt -Encoding "UTF8"
