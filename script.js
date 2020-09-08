const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Prompt user to select a media stream to pass it to the video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Whoops something is wrong " + error);
  }
}

button.addEventListener("click", async () => {
    button.disabled = true;

    // Calling picture in picture functionality directly
    await videoElement.requestPictureInPicture();

    // Reset button
    button.disabled = false;
});

 // Calling our method onLoad
 selectMediaStream();
