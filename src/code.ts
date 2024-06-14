figma.showUI(__html__, {height: 200, width: 200, title: 'A Figma plugin', themeColors: true});

figma.ui.onmessage = (message) => {
  console.log('CODE LOG', message);
  // sending a message back to the ui in a half second...
  setTimeout(() => {
    figma.ui.postMessage(`code.js: ${Date.now()}`, {origin: '*'});
  }, 500);
};
