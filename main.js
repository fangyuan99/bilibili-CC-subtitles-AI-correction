// ==UserScript==
// @name         Bilibili CC字幕AI修正
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Fetch and correct subtitles using OpenAI API
// @author
// @match        *://*.bilibili.com/*
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/marked/marked.min.js
// ==/UserScript==

(function () {
  "use strict";
  const idMatch = window.location.href.match(/(BV|av)([a-zA-Z0-9]+)/);
  if (!idMatch) return;
  const id = idMatch[0];

  // 全局变量
  let messages = [];
  let aiMessage = "";

  // 创建带有网站 Logo 的圆形按钮
  const toggleButton = document.createElement("button");
  toggleButton.style.position = "fixed";
  toggleButton.style.bottom = "20px";
  toggleButton.style.right = "20px";
  toggleButton.style.zIndex = "10001";
  toggleButton.style.width = "40px";
  toggleButton.style.height = "40px";
  toggleButton.style.backgroundImage =
    "url('https://www.bilibili.com/favicon.ico')";
  toggleButton.style.backgroundSize = "70%";
  toggleButton.style.backgroundPosition = "center";
  toggleButton.style.backgroundRepeat = "no-repeat";
  toggleButton.style.borderRadius = "50%";
  toggleButton.style.border = "none";
  toggleButton.style.cursor = "pointer";
  toggleButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  toggleButton.style.backgroundColor = "#ffffffcc";

  // 创建面板容器
  const container = document.createElement("div");
  container.style.color = "red";
  container.style.position = "fixed";
  container.style.top = "50%";
  container.style.left = "50%";
  container.style.transform = "translate(-50%, -50%)";
  container.style.zIndex = "10000";
  container.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  container.style.padding = "30px";
  container.style.border = "1px solid rgba(200, 200, 200, 0.3)";
  container.style.backdropFilter = "blur(20px)";
  container.style.borderRadius = "15px";
  container.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
  container.style.textAlign = "center";
  container.style.display = "none"; // Initially hidden
  container.style.width = "400px";
  container.style.maxHeight = "80%";
  container.style.overflowY = "auto";

  // 创建关闭按钮
  const closeButton = document.createElement("button");
  closeButton.innerText = "×";
  closeButton.style.position = "absolute";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.width = "30px";
  closeButton.style.height = "30px";
  closeButton.style.border = "none";
  closeButton.style.borderRadius = "50%";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.fontSize = "24px";
  closeButton.style.cursor = "pointer";
  closeButton.style.lineHeight = "30px";

  // 创建输入和按钮元素
  const apiKeyInput = document.createElement("input");
  apiKeyInput.id = "apiKey";
  apiKeyInput.placeholder = "Enter your OpenAI API Key: sk-xxx";
  apiKeyInput.style.margin = "0 0 15px 0";
  apiKeyInput.style.width = "100%";
  apiKeyInput.style.padding = "12px";
  apiKeyInput.style.borderRadius = "8px";
  apiKeyInput.style.border = "1px solid rgba(0, 0, 0, 0.1)";
  apiKeyInput.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)";
  apiKeyInput.style.backgroundColor = "#ffffffcc";
  apiKeyInput.style.boxSizing = "border-box";

  const apiUrlInput = document.createElement("input");
  apiUrlInput.id = "apiUrl";
  apiUrlInput.placeholder =
    "Enter OpenAI API URL: https://api.openai.com/v1/chat/completions";
  apiUrlInput.style.margin = "0 0 15px 0";
  apiUrlInput.style.width = "100%";
  apiUrlInput.style.padding = "12px";
  apiUrlInput.style.borderRadius = "8px";
  apiUrlInput.style.border = "1px solid rgba(0, 0, 0, 0.1)";
  apiUrlInput.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)";
  apiUrlInput.style.backgroundColor = "#ffffffcc";
  apiUrlInput.style.boxSizing = "border-box";

  const modelInput = document.createElement("input");
  modelInput.id = "model";
  modelInput.placeholder = "Enter OpenAI Model: gpt-4o-mini";
  modelInput.style.margin = "0 0 15px 0";
  modelInput.style.width = "100%";
  modelInput.style.padding = "12px";
  modelInput.style.borderRadius = "8px";
  modelInput.style.border = "1px solid rgba(0, 0, 0, 0.1)";
  modelInput.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)";
  modelInput.style.backgroundColor = "#ffffffcc";
  modelInput.style.boxSizing = "border-box";

  const fetchSubtitleButton = document.createElement("button");
  fetchSubtitleButton.innerText = "获取字幕";
  fetchSubtitleButton.className = "button";
  fetchSubtitleButton.style.marginBottom = "15px";
  fetchSubtitleButton.style.width = "100%";
  fetchSubtitleButton.style.padding = "12px";
  fetchSubtitleButton.style.borderRadius = "8px";
  fetchSubtitleButton.style.border = "none";
  fetchSubtitleButton.style.cursor = "pointer";
  fetchSubtitleButton.style.backgroundColor = "#0078D7";
  fetchSubtitleButton.style.color = "white";
  fetchSubtitleButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  fetchSubtitleButton.style.fontSize = "16px";

  const aiCorrectButton = document.createElement("button");
  aiCorrectButton.innerText = "AI 修正";
  aiCorrectButton.className = "button";
  aiCorrectButton.style.marginBottom = "15px";
  aiCorrectButton.style.width = "100%";
  aiCorrectButton.style.padding = "12px";
  aiCorrectButton.style.borderRadius = "8px";
  aiCorrectButton.style.border = "none";
  aiCorrectButton.style.cursor = "pointer";
  aiCorrectButton.style.backgroundColor = "#00B7C3";
  aiCorrectButton.style.color = "white";
  aiCorrectButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  aiCorrectButton.style.fontSize = "16px";

  const continueButton = document.createElement("button");
  continueButton.innerText = "继续生成";
  continueButton.className = "button";
  continueButton.style.marginBottom = "15px";
  continueButton.style.width = "100%";
  continueButton.style.padding = "12px";
  continueButton.style.borderRadius = "8px";
  continueButton.style.border = "none";
  continueButton.style.cursor = "pointer";
  continueButton.style.backgroundColor = "#FFB900";
  continueButton.style.color = "white";
  continueButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  continueButton.style.fontSize = "16px";
  continueButton.style.display = "none"; // Initially hidden

  const copyButton = document.createElement("button");
  copyButton.innerText = "复制文本";
  copyButton.className = "button";
  copyButton.style.marginBottom = "15px";
  copyButton.style.width = "100%";
  copyButton.style.padding = "12px";
  copyButton.style.borderRadius = "8px";
  copyButton.style.border = "none";
  copyButton.style.cursor = "pointer";
  copyButton.style.backgroundColor = "#8E8CD8";
  copyButton.style.color = "white";
  copyButton.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  copyButton.style.fontSize = "16px";
  copyButton.style.display = "none"; // Initially hidden

  const subtitleContainer = document.createElement("div");
  subtitleContainer.id = "subtitle-container";
  subtitleContainer.style.marginTop = "20px";
  subtitleContainer.style.whiteSpace = "pre-wrap";
  subtitleContainer.style.border = "1px solid rgba(0, 0, 0, 0.1)";
  subtitleContainer.style.padding = "15px";
  subtitleContainer.style.maxWidth = "100%";
  subtitleContainer.style.maxHeight = "300px";
  subtitleContainer.style.overflowY = "auto";
  subtitleContainer.style.margin = "0 auto";
  subtitleContainer.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
  subtitleContainer.style.borderRadius = "8px";
  subtitleContainer.style.textAlign = "left";
  subtitleContainer.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.1)";
  subtitleContainer.contentEditable = true;

  // 将关闭按钮添加到容器中
  container.appendChild(closeButton);

  // 将元素添加到容器中
  container.appendChild(apiKeyInput);
  container.appendChild(apiUrlInput);
  container.appendChild(modelInput);
  container.appendChild(fetchSubtitleButton);
  container.appendChild(aiCorrectButton);
  container.appendChild(continueButton);
  container.appendChild(copyButton);
  container.appendChild(subtitleContainer);

  // 将容器和开关按钮添加到页面
  document.body.appendChild(container);
  document.body.appendChild(toggleButton);

  // 添加样式
  const style = document.createElement("style");
  style.textContent = `
      body {
        font-family: 'Segoe UI Variable', 'Segoe UI', Arial, sans-serif;
        margin: 0;
        padding: 0;
      }
      .button {
        font-size: 16px;
        cursor: pointer;
      }
      #subtitle-container, input, button {
        font-family: 'Segoe UI Variable', 'Segoe UI', Arial, sans-serif;
        font-size: 14px;
      }
    `;
  document.head.appendChild(style);

  // 获取视频信息
  const getInfo = async (id) => {
    const myHeaders = new Headers();
    myHeaders.append("User-Agent", "Apifox/1.0.0 (https://apifox.com)");
    myHeaders.append("Accept", "*/*");
    myHeaders.append("Host", "api.bilibili.com");
    myHeaders.append("Connection", "keep-alive");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    if (id.startsWith("BV")) {
      id = "bvid=" + id;
    } else {
      id = "aid=" + id;
    }

    let res = await fetch(
      `https://api.bilibili.com/x/web-interface/view?${id}`,
      requestOptions
    );

    const { data } = await res.json();
    const { aid, bvid, cid } = data;

    return { aid, bvid, cid };
  };

  // 获取字幕内容
  const getSubtitle = async (cid, aid) => {
    let video_data = await fetch(
      `https://api.bilibili.com/x/player/v2?cid=${cid}&aid=${aid}`,
      { credentials: "include" }
    );

    let responseData = await video_data.json();
    if (responseData.code !== 0) {
      console.error("API returned an error:", responseData.message);
      return;
    }

    const { data } = responseData;

    if (
      !data ||
      !data.subtitle ||
      !data.subtitle.subtitles ||
      data.subtitle.subtitles.length === 0
    ) {
      console.log("No subtitles available");
      return;
    }

    const subtitles = data.subtitle.subtitles;
    const s_url = subtitles[0].subtitle_url;

    const subtitle_res = await fetch(s_url);
    const subtitle_content = await subtitle_res.json();

    return JSON.stringify(subtitle_content.body);
  };

  // AI 修正字幕
  const correctSubtitle = async (apiKey, apiUrl, model, content) => {
    const systemPrompt = `### 角色和能力
你是一名中文文案修正大师，擅长处理同音不同字、标点符号错误等问题。
### 上下文说明
我将提供一段从视频转文字获取的文案，这段文案由于识别精度的问题，存在一些同音不同字的错误。
### 任务陈述
1. 识别并修正文案中的同音不同字问题，添加正确的标点符号。
2. 保持原文内容的完整性，不主观增删内容。
3. 将文案进行合理分段，如果你主观增删内容，你会被殴打，如果没有，你会得到10美元小费
4. 如果你确定这是两个人对话，可以标注人名，从上下文中获取人名`;

    try {
      if (content) {
        // 如果有新的内容，添加到消息中
        messages = []; // 重置会话
        messages.push({ role: "system", content: systemPrompt });
        messages.push({ role: "user", content: content });
      } else {
        // 如果点击了继续生成，不要清空 aiMessage，直接在消息中添加“继续”
        messages.push({ role: "user", content: "继续" });
      }

      const payload = {
        model: model || "gpt-4o-mini",
        messages: messages,
        stream: true,
      };

      const headers = {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      };

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const textChunk = decoder.decode(value);
          const lines = textChunk
            .split("\n")
            .filter((line) => line.trim() !== "");

          for (const line of lines) {
            if (line.trim() === "data: [DONE]") break;

            const json = JSON.parse(line.replace(/^data: /, ""));
            const content = json.choices[0].delta.content;
            if (content) {
              aiMessage += content; // 不清空之前的内容，继续追加
              subtitleContainer.innerHTML = marked.parse(aiMessage);
            }
          }
        }
        messages.push({ role: "assistant", content: aiMessage });
      } else {
        console.error("Error with OpenAI API:", response.statusText);
      }
    } catch (error) {
      console.error("Error with OpenAI API:", error);
    }
  };

  // 本地缓存函数
  const loadSettings = () => {
    apiKeyInput.value = localStorage.getItem("apiKey") || "";
    apiUrlInput.value = localStorage.getItem("apiUrl") || "";
    modelInput.value = localStorage.getItem("model") || "";
  };

  const saveSettings = () => {
    localStorage.setItem("apiKey", apiKeyInput.value);
    localStorage.setItem("apiUrl", apiUrlInput.value);
    localStorage.setItem("model", modelInput.value);
  };

  // 加载本地缓存的设置
  loadSettings();

  // 按钮事件监听
  fetchSubtitleButton.addEventListener("click", async () => {
    const { aid, bvid, cid } = await getInfo(id);
    const subtitleContent = await getSubtitle(cid, aid);
    subtitleContainer.innerHTML = marked.parse(subtitleContent);
  });

  aiCorrectButton.addEventListener("click", async () => {
    try {
      aiCorrectButton.disabled = true;
      aiCorrectButton.innerText = "AI 正在修正...";
      const apiKey = apiKeyInput.value;
      const apiUrl = apiUrlInput.value;
      const model = modelInput.value;
      let content = subtitleContainer.innerText;
      if (content === "") {
        const { aid, bvid, cid } = await getInfo(id);
        const subtitleContent = await getSubtitle(cid, aid);
        content = subtitleContent;
      }
      if (apiKey && apiUrl && content) {
        aiMessage = ""; // 开始新的生成，清空之前的 aiMessage
        await correctSubtitle(apiKey, apiUrl, model, content);
        saveSettings();
        continueButton.style.display = "block";
        copyButton.style.display = "block";
      } else {
        console.error("请先输入 API Key、API URL，并获取字幕。");
      }
    } catch (e) {
      console.error(e);
    } finally {
      aiCorrectButton.disabled = false;
      aiCorrectButton.innerText = "AI 修正";
    }
  });

  continueButton.addEventListener("click", async () => {
    try {
      continueButton.disabled = true;
      continueButton.innerText = "继续生成中...";
      const apiKey = apiKeyInput.value;
      const apiUrl = apiUrlInput.value;
      const model = modelInput.value;
      if (apiKey && apiUrl) {
        await correctSubtitle(apiKey, apiUrl, model, "");
        saveSettings();
      } else {
        console.error("请先输入 API Key 和 API URL。");
      }
    } catch (e) {
      console.error(e);
    } finally {
      continueButton.disabled = false;
      continueButton.innerText = "继续生成";
    }
  });

  copyButton.addEventListener("click", () => {
    const text = subtitleContainer.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("文本已复制到剪贴板！");
      })
      .catch((err) => {
        console.error("无法复制文本: ", err);
      });
  });

  // 开关按钮事件监听
  toggleButton.addEventListener("click", () => {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
  });

  // 关闭按钮事件监听
  closeButton.addEventListener("click", () => {
    container.style.display = "none";
  });

  // 实现面板可拖动
  let isDragging = false;
  let offsetX, offsetY;
  let desiredX, desiredY;
  let animationFrameId;

  container.addEventListener("mousedown", function (e) {
    if (
      e.target.tagName === "INPUT" ||
      e.target.tagName === "BUTTON" ||
      e.target.contentEditable === "true"
    )
      return;
    isDragging = true;
    const rect = container.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    e.preventDefault();
    container.style.willChange = "left, top";
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      desiredX = e.clientX - offsetX;
      desiredY = e.clientY - offsetY;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updatePosition);
      }
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    container.style.willChange = "";
  });

  function updatePosition() {
    container.style.left = desiredX + "px";
    container.style.top = desiredY + "px";
    container.style.transform = "none";
    animationFrameId = null;
  }
})();
