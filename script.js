body {
  margin: 0;
  background-color: black;
  color: red;
  font-family: monospace;
  overflow: hidden;
}

#overlay {
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 1;
}

#terminal {
  margin-bottom: 10px;
}

#command {
  background: black;
  color: red;
  border: none;
  outline: none;
  font-family: monospace;
  font-size: 16px;
  width: 80vw;
}

#spiderweb {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.glitch {
  animation: shake 0.5s;
}

@keyframes shake {
  0% { transform: translate(1px, 1px); }
  20% { transform: translate(-1px, 2px); }
  40% { transform: translate(-3px, 1px); }
  60% { transform: translate(3px, 1px); }
  80% { transform: translate(-1px, -1px); }
  100% { transform: translate(1px, -2px); }
}
