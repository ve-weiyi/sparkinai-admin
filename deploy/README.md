# Deploy 目录说明

本目录包含 sparkinai-admin 的部署配置文件。

## 目录结构

```
deploy/
├── docker/                    # Docker 构建文件
│   └── Dockerfile            # 管理后台的 Docker 构建文件
├── docker-compose/           # Docker Compose 配置
│   └── app/
│       └── docker-compose.yml # 本地 Docker Compose 部署配置
├── k8s/                      # Kubernetes 配置
│   └── app/
│       └── deployment.yaml   # K8s 部署配置
└── nginx.conf                # Nginx 配置文件
```

## 部署方式

### 1. Docker Compose 部署

```bash
cd deploy/docker-compose/app
docker-compose up -d
```

访问地址：http://localhost:19521

### 2. Kubernetes 部署

```bash
kubectl apply -f deploy/k8s/app/deployment.yaml
```

访问地址：http://<node-ip>:30521

### 3. 直接 Docker 构建

```bash
docker build -f deploy/docker/Dockerfile -t sparkinai-admin:latest .
docker run -d -p 19521:80 --name sparkinai-admin sparkinai-admin:latest
```

## CI/CD

项目使用 GitHub Actions 自动构建和部署：

- **Workflow**: `.github/workflows/release-branch.yml`
- **触发条件**: 推送到 `main`、`master` 或 `feature/**` 分支
- **镜像仓库**: GitHub Container Registry (ghcr.io)
- **镜像标签**:
  - `{branch}-{commit-hash}`: 每次构建的唯一标签
  - `latest`: 最新版本标签

## 镜像信息

- **镜像名称**: `ghcr.io/ve-weiyi/sparkinai-admin`
- **端口**: 80 (容器内部) / 19521 (宿主机)
- **基础镜像**: nginx:stable-alpine
- **构建工具**: Node.js 22 + pnpm

## 注意事项

1. 确保 GitHub Container Registry 的访问权限已配置
2. K8s 部署需要先创建 `ghcr-secret` Secret
3. 生产环境建议使用特定版本标签而非 `latest`
