Write-Output "copying samples text to public folder"
Copy-Item .\src\components\samples\*.tsx .\public\samples
Get-ChildItem .\public\samples\*.tsx | Rename-Item -NewName { $_.name -Replace '\.tsx$', '.txt' }
