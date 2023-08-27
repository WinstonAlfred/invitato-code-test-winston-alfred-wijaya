export function PlayMusic() {
    const audio = new Audio('song.mp3'); // Adjust the audio file path
  
    audio.play()
      .then(() => {
        console.log('Music is playing');
      })
      .catch(error => {
        console.error('Error playing music:', error);
      });
  }

    export default PlayMusic;
  
  
  
  
  
  