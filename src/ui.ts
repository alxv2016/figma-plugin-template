import './ui.scss';

window.onmessage = (e) => console.log('UI LOG', e.data.pluginMessage);
parent.postMessage({pluginMessage: `ui.html: ${Date.now()}`}, '*');
//
