
const input = document.getElementById('terminal-input');
const output = document.getElementById('output');

const commands = {
  hello: 'Hey there, legend. Welcome back to the underworld.',
  clear: '',
  help: 'Commands: hello, clear, glitch, love, power',
  glitch: '⚠ SYSTEM MALFUNCTION ⚠',
  love: 'You feeling soft today huh? ❤️',
  power: '⚡⚡ THE CORE IS STABLE. ALL SYSTEMS GO. ⚡⚡',
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    const response = commands[cmd] || 'Unknown command. Type "help".';

    if (cmd === 'clear') {
      output.innerHTML = '';
    } else {
      const newLine = document.createElement('div');
      newLine.textContent = '> ' + cmd;
      output.appendChild(newLine);

      const reply = document.createElement('div');
      reply.textContent = response;
      output.appendChild(reply);
    }

    input.value = '';
    output.scrollTop = output.scrollHeight;
  }
});
