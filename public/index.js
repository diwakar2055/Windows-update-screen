const keyInput = document.getElementById('keyInput');
const keyForm = document.getElementById('keyForm');
const startBtn = document.getElementById('startBtn');
const statusIndicator = document.getElementById('statusIndicator');

let combo = [];
let comboString = '';
let isSetting = false;

function updateStatus(message, type = 'info') {
  const statusText = statusIndicator.querySelector('.status-text');
  statusText.textContent = message;
  
  // Remove existing classes
  statusIndicator.className = 'status-indicator';
  
  // Add appropriate class
  if (type === 'success') {
    statusIndicator.classList.add('success');
  } else if (type === 'error') {
    statusIndicator.classList.add('error');
  }
  
  // Add animation
  statusIndicator.classList.add('updated');
  setTimeout(() => {
    statusIndicator.classList.remove('updated');
  }, 500);
}

function checkReady() {
  startBtn.disabled = !(combo.length > 0);
  if (combo.length > 0) {
    updateStatus(`✅ Key combination set: ${comboString}`, 'success');
  } else {
    updateStatus('Waiting for key combination...');
  }
}

keyInput.addEventListener('focus', () => {
  isSetting = true;
  keyInput.value = '';
  combo = [];
  comboString = '';
  updateStatus('🎯 Click and press your secret key combination...');
});

document.addEventListener('keydown', (e) => {
  if (!isSetting) return;
  e.preventDefault();
  let keys = [];
  if (e.ctrlKey) keys.push('Control');
  if (e.altKey) keys.push('Alt');
  if (e.shiftKey) keys.push('Shift');
  if (e.metaKey) keys.push('Meta');
  if (!['Control','Alt','Shift','Meta'].includes(e.key)) keys.push(e.key);
  combo = keys;
  comboString = keys.join('+');
  keyInput.value = comboString;
  
  if (combo.length > 0) {
    updateStatus(`🎯 Pressed: ${comboString} - Click "Set Key Combination" to confirm`, 'info');
  }
});

keyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (combo.length === 0) {
    updateStatus('❌ Please set a key combination first', 'error');
    return;
  }
  
  sessionStorage.setItem('exitCombo', JSON.stringify(combo));
  keyInput.setAttribute('readonly', true);
  keyInput.blur();
  isSetting = false;
  checkReady();
  
  updateStatus(`✅ Key combination saved: ${comboString}`, 'success');
});

startBtn.addEventListener('click', () => {
  updateStatus('🚀 Starting simulation...', 'info');
  setTimeout(() => {
    window.location.href = 'simulate.html';
  }, 500);
});

// Initialize status
updateStatus('Waiting for key combination...'); 