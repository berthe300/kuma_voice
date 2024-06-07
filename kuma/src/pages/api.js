// api.js

export const sendAudioToAPI = async (audioData) => {
  const formData = new FormData();
  formData.append('audio', audioData);
  
  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData
    });
    if (!response.ok) {
      throw new Error('Failed to upload audio');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
