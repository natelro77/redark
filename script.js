const commands = {
  hello: 'Hey legend.',
  help: 'Available commands: hello, help, clear, glitch, summon',
  clear: 'clear',
  glitch: 'System... glitching...',
  summon: 'You summoned something strange...',
};

const input = document.getElementById('command');
const terminal = document.getElementById('terminal');

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';

    terminal.innerHTML += `\n> ${command}\n`;

    if (command === 'clear') {
      terminal.innerHTML = '';
      return;
    }

    if (command === 'glitch') {
      document.body.classList.add('glitch');
      setTimeout(() => {
        document.body.classList.remove('glitch');
      }, 500);
    }

    const response = commands[command];
    terminal.innerHTML += `${response || 'Unknown command'}\n`;
  }
});
