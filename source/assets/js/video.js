
const videoPlayer = document.getElementById('video-player');

// Function to replay the video when it ends
function replayVideo() {
    videoPlayer.currentTime = 0; // Reset video to the beginning
    videoPlayer.play();
}

// Add event listener to replay the video when it ends
videoPlayer.addEventListener('ended', replayVideo);