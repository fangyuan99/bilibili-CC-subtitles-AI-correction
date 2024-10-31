# Bilibili CC 字幕 AI 修正

一个用于获取并修正 B 站 CC 字幕的油猴脚本，通过 OpenAI API 自动纠正字幕中的同音错字和标点符号问题。最终可以获得一份完整的 AI 矫正过的文案

## 功能特点

- 🎯 自动获取 B 站视频 CC 字幕
- 🤖 利用 OpenAI API 进行智能纠错
- ✍️ 修正同音错字问题
- 📝 优化标点符号使用
- 💬 支持对话格式标注
- 📋 一键复制修正后的文本

## 安装说明

1. 首先安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展
2. 点击 [安装脚本](https://github.com/fangyuan99/bilibili-CC-subtitles-AI-correction/raw/refs/heads/main/Bilibili%20CC%E5%AD%97%E5%B9%95AI%E4%BF%AE%E6%AD%A3.user.js) | [国内加速安装](https://github.site/fangyuan99/bilibili-CC-subtitles-AI-correction/raw/refs/heads/main/Bilibili%20CC%E5%AD%97%E5%B9%95AI%E4%BF%AE%E6%AD%A3.user.js) 将其添加到 Tampermonkey 中
   

## 使用方法

1. 打开任意 B 站视频页面
2. 点击右下角悬浮的 B 站 Logo 按钮打开控制面板
3. 填写必要配置：
   - OpenAI API Key
   - API URL（默认为 OpenAI 官方接口）
   - 模型选择（如：gpt-4o-mini）
4. 点击"获取字幕"按钮获取当前视频字幕
5. 点击"AI 修正"开始智能纠错
6. 使用"继续生成"按钮处理长文本
7. 点击"复制文本"获取修正后的内容

## 配置说明

| 配置项 | 说明 | 示例值 |
|--------|------|--------|
| API Key | OpenAI 的 API 密钥 | sk-xxx... |
| API URL | OpenAI 接口地址 | https://api.openai.com/v1/chat/completions |
| Model | 使用的 AI 模型 | gpt-4o-mini |

## 注意事项

- 推荐使用 `gemini-1.5-flash-002` 实测过万字的文案也可以成功修正，免费使用: https://aistudio.google.com/app/apikey （需要通过 one-api | new-api 等项目转为 OpenAI 格式）
- 需要视频包含 CC 字幕才能使用
- API 调用需要确保网络能够访问 OpenAI 服务
- 本地会保存 API 相关配置信息（不会上传到云端）
- 请确保 API Key 额度充足

## 更新日志

### v1.2
- 添加继续生成功能
- 优化 UI 交互体验
- 增加本地配置保存

### v1.1 
- 修复字幕获取问题
- 改进错误提示

### v1.0
- 首次发布

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证

MIT License

## 致谢

- OpenAI API
- Bilibili API
- Tampermonkey 