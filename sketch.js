function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  noLoop(); // 停止連續繪圖
}

function draw() {
  background('#003049'); // 設定背景顏色

  for (let i = 0; i < 40; i++) {
    let x = random(width); // 隨機 X 座標
    let y = random(height); // 隨機 Y 座標
    let size = map(mouseX, 0, width, 40, 120); // 根據滑鼠 X 座標調整大小，範圍 40~120
    let color = [random(255), random(255), random(255)]; // 隨機鮮豔顏色
    fill(color);
    noStroke();
    ellipse(x, y, size); // 繪製圓形
  }
}

function mouseMoved() {
  redraw(); // 滑鼠移動時重新繪製畫面
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 當視窗大小改變時調整畫布
}

// 顯示 iframe 並載入指定的 URL
function showIframe(url) {
  const iframe = document.getElementById('content-frame');
  iframe.src = url; // 設定 iframe 的來源
  iframe.style.display = 'block'; // 顯示 iframe
}

// 隱藏 iframe
function hideIframe() {
  const iframe = document.getElementById('content-frame');
  iframe.style.display = 'none'; // 隱藏 iframe
  iframe.src = ''; // 清空 iframe 的來源

  // 收回所有子選單
  document.querySelectorAll('.menu li').forEach((li) => {
    li.classList.remove('active');
  });
}

// 切換子選單顯示狀態
function toggleSubmenu(element) {
  // 移除其他選單的 active 狀態
  document.querySelectorAll('.menu li').forEach((li) => {
    if (li !== element) {
      li.classList.remove('active');
    }
  });

  // 切換當前選單的 active 狀態
  element.classList.toggle('active');
}
