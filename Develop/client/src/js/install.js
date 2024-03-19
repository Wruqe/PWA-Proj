const butInstall = document.getElementById('buttonInstall');
window.deferredPrompt = null;


window.addEventListener('beforeinstallprompt', (event) => {
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  const promptEventListen = window.deferredPrompt;

  if (!promptEventListen) {
    return;
  }

  promptEvent.prompt();

  const choiceResults = await promptEvent.userChoice;
  if (choiceResults.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
  } else {
    console.log('User dismissed the A2HS prompt');
  }

  window.deferredPrompt = null;

  butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
  window.deferredPrompt = null;
});

