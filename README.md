# DSCNCU-NodeJSWeb

## Overview

建立GCP專案，利用 Cloud SQL 建立雲端資料庫，並利用 App Engine 架設 NodeJS Web Server

## Dependency

- GCP Cloud SQL Server
- GCP App Engine

## Tutorial

1. 更改 app.yaml 檔案，內容如下
    - env_variables:
      - INSTANCE_CONNECTION_NAME: <SQL執行個體連線名稱>
      - DB_USER: root <SQL伺服器帳號>
      - DB_DATABASE: <SQL資料庫名稱>
      - DB_PASS: <SQL伺服器密碼>
    - beta_settings:
      - cloud_sql_instances: <SQL執行個體連線名稱>

2. 部屬至 App Engine

```shell=
gcloud app deploy
```