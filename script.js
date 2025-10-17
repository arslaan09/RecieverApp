const context = cast.framework.CastReceiverContext.getInstance();
const namespace = 'urn:x-cast:com.yourcompany.mirroring';
const status = document.getElementById('status');
const videoElement = document.getElementById('video');

context.addCustomMessageListener(namespace, (event) => {
  const data = event.data;
  console.log('Received message:', data);

  if (data.type === 'PLAY_STREAM') {
    const url = data.url;
    status.textContent = 'Streaming from: ' + url;
    videoElement.src = url;
  } else if (data.type === 'STOP_STREAM') {
    videoElement.src = '';
    status.textContent = 'Stream stopped';
  }
});

context.start();
status.textContent = 'Receiver ready. Waiting for sender...';
