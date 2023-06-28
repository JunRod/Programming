import ImageGallery from "react-image-gallery";
import image1 from "../img/1.jpg";
import image2 from "../img/2.jpg";
import image3 from "../img/3.jpg";

const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
];

export const Gallery = () => {
  return (
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        slideDuration={400}
        thumbnailHeight={100}
        thumbnailWidth={100}
      />
  );
};
