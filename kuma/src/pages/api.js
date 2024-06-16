export async function sendAudioToAPI(audioBlob) {
  const formData = new FormData();
  formData.append('audio', audioBlob, 'recording.wav');

  const response = await fetch('http://localhost:5000/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text(); // Obtenez le texte de l'erreur pour des diagnostics plus précis
    throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
  }

  return response.json();
}
