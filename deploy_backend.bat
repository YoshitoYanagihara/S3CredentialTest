@ECHO OFF

powershell Compress-Archive -Path backend/index.js -Update -DestinationPath backend.zip
aws lambda update-function-code --function-name GetCredential --zip-file fileb://backend.zip
