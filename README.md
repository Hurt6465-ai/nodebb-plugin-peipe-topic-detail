
markdown
# nodebb-plugin-peipe-topic-detail

适用于 Peipe/HAA9 风格移动端主题页面的 NodeBB 4.x 主题详情页插件。

## 功能特性

- 紧凑的移动端主题详情布局。
- 内联帖子翻译按钮与标题翻译按钮。
- 本地翻译设置弹窗，支持谷歌/AI 翻译服务商。
- 底部回复编辑器，支持图片/视频上传、16kbps Opus 语音录制、引用回复以及输入内容翻译。
- 语音消息播放器与内联视频转换。
- 图片画廊灯箱，支持键盘、点按与滑动导航。
- 楼层/页码导航器。
- 头像链接指向 `/user/{userslug}/topics`，在线状态圆点与国家/地区标志缓存。
- 多语言运行时字符串，并适配官方 NodeBB 语言文件：zh-CN、en-GB、my-MM、vi。

## 从 GitHub 安装（裸机/直接部署）

```bash
npm install git+https://github.com/Hurt6465-ai/nodebb-plugin-peipe-topic-detail.git
./nodebb plugin activate nodebb-plugin-peipe-topic-detail
./nodebb build
./nodebb restart
```

## Termius 安装方式（Docker 部署）

适用于使用 Docker 运行 NodeBB 并通过 Termius 等 SSH 客户端维护的情况。
操作会临时暂停容器自动重启，安装构建完成后再恢复。

```bash
docker update --restart=no nodebb

docker exec -it nodebb sh -lc 'cd /usr/src/app && npm uninstall nodebb-plugin-peipe-partners || true && npm cache clean --force && npm install --legacy-peer-deps --force https://github.com/Hurt6465-ai/nodebb-plugin-peipe-topic-detail/archive/refs/heads/main.tar.gz && ./nodebb build'

docker restart nodebb

docker update --restart=always nodebb
```

