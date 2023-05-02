//your JS code here. If required.

function downloadImages(images) {
  return Promise.all(
    images.map((image) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load image's URL: ${image.url}`));
        img.src = image.url;
      });
    })
  );
}

const images = [
  { url: 'https://picsum.photos/200/300' },
  { url: 'https://picsum.photos/200/301' },
  { url: 'https://picsum.photos/200/302' },
];

const output = document.getElementById('output');

document.getElementById('download-images-button').addEventListener('click', () => {
  downloadImages(images)
    .then((imgs) => {
      for (const img of imgs) {
        output.appendChild(img);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});

