const combo = JSON.parse(sessionStorage.getItem('exitCombo') || '[]');
const startOverlay = document.getElementById('startOverlay');
const container = document.body; // The main element to make fullscreen

// Strict key event blocking
const keyEvents = ['keydown', 'keyup', 'keypress'];
function isExitCombo(e) {
  let keys = [];
  if (e.ctrlKey) keys.push('Control');
  if (e.altKey) keys.push('Alt');
  if (e.shiftKey) keys.push('Shift');
  if (e.metaKey) keys.push('Meta');
  if (!['Control','Alt','Shift','Meta'].includes(e.key)) keys.push(e.key);
  return keys.join('+') === combo.join('+');
}
function blockKeyEvent(e) {
  if (isExitCombo(e)) {
    document.exitFullscreen && document.exitFullscreen();
    document.exitPointerLock && document.exitPointerLock();
    window.location.href = 'index.html';
  } else {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return false;
  }
}
keyEvents.forEach(event => {
  window.addEventListener(event, blockKeyEvent, true);
  document.addEventListener(event, blockKeyEvent, true);
});

// Show overlay, require click to start fullscreen
function goFullscreen() {
  // 1. Request fullscreen
  if (container.requestFullscreen) container.requestFullscreen();
  else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
  else if (container.mozRequestFullScreen) container.mozRequestFullScreen();
  else if (container.msRequestFullscreen) container.msRequestFullScreen();
  
  // 2. Hide overlay and cursor immediately
  startOverlay.style.display = 'none';
  document.body.style.cursor = 'none';

  // 3. Activate mouse blocking and pointer lock *after* the click
  const mouseEvents = ['mousemove', 'mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu', 'wheel'];
  function blockMouse(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.stopImmediatePropagation) e.stopImmediatePropagation();
    return false;
  }
  mouseEvents.forEach(event => {
    window.addEventListener(event, blockMouse, true);
  });

  function lockPointer() {
    if (document.body.requestPointerLock) document.body.requestPointerLock();
  }
  setTimeout(lockPointer, 200);
}

startOverlay.addEventListener('click', goFullscreen); 