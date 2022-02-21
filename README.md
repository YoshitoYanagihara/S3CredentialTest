# S3CredentialTest
AWS S3のクレデンシャル実験  
S3に置いてあるjsonファイルに対してアクセスする  
***※用が済んだ時点でAWSにデプロイしてあるリソース群を解体する可能性があります***  

## 実行方法

1. 「docker-compose up -d」コマンドでコンテナを立ち上げる
2. http://localhost:8080 にアクセス
3. 「実行」ボタン押下

## 情報

|key|value|
|---|---|
|jsonファイルのURL|https://contents.yanap-app.com/hoge/fuga/piyo.json|
|クレデンシャル取得API|https://credential.yanap-app.com/credential|
