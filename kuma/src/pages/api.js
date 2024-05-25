// api.js

// Cette fonction enverra les données audio à votre API backend
export const sendAudioToAPI = async (audioData) => {
    try {
      // Vous devez remplacer 'your-api-endpoint' par l'URL de votre endpoint API réel
      const response = await fetch('http://localhost:5000/recordings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioData }), // Envoyez les données audio dans le corps de la requête
      });
  
      // Vérifiez si la requête a réussi
      if (response.ok) {
        console.log('Audio data successfully sent to API');
      } else {
        throw new Error('Failed to send audio data to API');
      }
    } catch (error) {
      throw new Error(`Error sending audio data to API: ${error.message}`);
    }
  };
  