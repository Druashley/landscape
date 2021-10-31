import React, { useState, useEffect } from "react";

export default function ImageCarousel() {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState({ src: "" });

  useEffect(() => {
    setImages([
      { id: 1, src: "https://picsum.photos/id/500/500/" },
      { id: 2, src: "https://picsum.photos/id/501/500/" },
      { id: 3, src: "https://picsum.photos/id/502/500/" },
      { id: 4, src: "https://picsum.photos/id/503/500/" },
      { id: 5, src: "https://picsum.photos/id/504/720/" },
      { id: 6, src: "https://picsum.photos/id/505/720/" },
      { id: 7, src: "https://picsum.photos/id/506/720/" },
      { id: 8, src: "https://picsum.photos/id/507/720/" },
      { id: 9, src: "https://picsum.photos/id/508/720/" },
    ]);
  }, []);

  const handlePreview = (id) => {
    const previewImage = images.filter((filter) => filter.id === id);
    setPreview(previewImage[0]);
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto">
        {preview && preview.src.length > 0 && (
          <div className="bg-">
            <img
              src={preview.src}
              alt="preview"
              className="mx-auto shadow-xl md:rounded-xl"
            />
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 mx-auto gap-2 mt-4">
        {images &&
          images.map((image) => {
            return (
              <div key={image.id} className=" mx-auto">
                <img
                  src={image.src}
                  alt={image.id}
                  onClick={() => {
                    handlePreview(image.id);
                  }}
                  className="rounded-xl mx-auto md:w-4/5 shadow-xl cursor-pointer"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
