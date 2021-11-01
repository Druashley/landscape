import React, { useState, useEffect, useRef } from "react";

export default function ImageCarousel() {
  const imageTop = useRef(null);

  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState({ src: "" });

  useEffect(() => {
    setImages([
      {
        id: 1,
        src: "https://picsum.photos/id/500/500/",
        date: "5-12-2021",
        summary:
          "Ut posuere arcu eget enim ornare, consequat placerat mauris facilisis. Fusce sit amet metus sed sapien aliquam eleifend. Maecenas hendrerit odio massa, vitae luctus dolor auctor sed. Vestibulum a lectus nunc. Sed placerat leo sit amet nisl elementum scelerisque. Sed egestas lorem sed ornare imperdiet.",
      },
      {
        id: 2,
        src: "https://picsum.photos/id/501/500/",
        date: "5-23-2021",
        summary:
          "Pellentesque at condimentum quam. Suspendisse euismod laoreet tortor, quis euismod diam porta ac. Maecenas in massa eget quam fringilla ultrices a at lorem. Etiam eget ligula vitae turpis ultricies sollicitudin et faucibus purus. Morbi quis venenatis magna. Nulla facilisi.",
      },
      {
        id: 3,
        src: "https://picsum.photos/id/502/500/",
        date: "6-12-2021",
        summary:
          "Curabitur a bibendum libero. Proin suscipit ipsum at elit sodales scelerisque. Curabitur a quam sed velit faucibus porta. Donec in pellentesque magna. Cras aliquam tincidunt fermentum. Curabitur dictum justo ut varius congue. Mauris a maximus lectus.",
      },
      {
        id: 4,
        src: "https://picsum.photos/id/503/500/",
        date: "6-17-2021",
        summary:
          "Maecenas mauris risus, vehicula nec purus in, semper cursus diam. Sed non sem sit amet eros sollicitudin scelerisque eu vel turpis. Nunc elementum erat non ligula vulputate ullamcorper. Sed tristique dui dolor, vitae rutrum massa molestie sit amet. Maecenas elementum, libero in commodo dignissim, ex dui pretium ante, et suscipit elit nibh vel mauris. Duis lorem enim, malesuada id tempor at, interdum eget felis.",
      },
      {
        id: 5,
        src: "https://picsum.photos/id/504/720/",
        date: "7-1-2021",
        summary:
          "Donec sed lorem ac augue ultricies tristique id vel turpis. Maecenas nec aliquet nibh. Morbi eget nibh sed justo venenatis efficitur.",
      },
      {
        id: 6,
        src: "https://picsum.photos/id/505/720/",
        date: "7-11-2021",
        summary: "Curabitur a bibendum libero. ",
      },
      {
        id: 7,
        src: "https://picsum.photos/id/506/720/",
        date: "8-02-2021",
        summary:
          "Nunc suscipit euismod dolor eget maximus. Etiam diam metus, tincidunt et luctus ac, imperdiet quis mauris.",
      },
      {
        id: 8,
        src: "https://picsum.photos/id/507/720/",
        date: "8-17-2021",
        summary:
          "Sed vel nibh nec odio tristique eleifend. Fusce viverra diam at ante accumsan aliquam. Maecenas sagittis lectus mauris, in rutrum felis egestas sit amet. Duis rutrum, nisl sed pulvinar rutrum, enim neque tincidunt elit, at maximus justo tellus eget est. Maecenas quis ipsum eu nibh aliquet sodales non sed neque. Aenean nec nulla turpis. Phasellus purus dolor, scelerisque quis lorem non, blandit pulvinar turpis.",
      },
      {
        id: 9,
        src: "https://picsum.photos/id/508/720/",
        date: "8-30-2021",
        summary:
          "Ut posuere arcu eget enim ornare, consequat placerat mauris facilisis. Fusce sit amet metus sed sapien aliquam eleifend. Maecenas hendrerit odio massa, vitae luctus dolor auctor sed.",
      },
      {
        id: 10,
        src: "https://picsum.photos/id/509/720/",
        date: "9-02-2021",
        summary:
          "Ut posuere arcu eget enim ornare, consequat placerat mauris facilisis. Fusce sit amet metus sed sapien aliquam eleifend. Maecenas hendrerit odio massa, vitae luctus dolor auctor sed.",
      },
      {
        id: 11,
        src: "https://picsum.photos/id/510/720/",
        date: "9-15-2021",
        summary:
          "Ut posuere arcu eget enim ornare, consequat placerat mauris facilisis. Fusce sit amet metus sed sapien aliquam eleifend. Maecenas hendrerit odio massa, vitae luctus dolor auctor sed.",
      },
      {
        id: 12,
        src: "https://picsum.photos/id/511/720/",
        date: "9-23-2021",
        summary:
          "Ut posuere arcu eget enim ornare, consequat placerat mauris facilisis. Fusce sit amet metus sed sapien aliquam eleifend. Maecenas hendrerit odio massa, vitae luctus dolor auctor sed.",
      },
    ]);
  }, []);

  const handlePreview = (id) => {
    const previewImage = images.filter((filter) => filter.id === id);
    setPreview(previewImage[0]);
    window.scrollTo(0, imageTop.current.offsetTop);
  };
  return (
    <div className="container mx-auto">
      <div className="mx-auto" ref={imageTop}>
        {preview && preview.src.length > 0 && (
          <div className="flex flex-col items-center">
            <img
              src={preview.src}
              alt="preview"
              className="mx-auto  md:rounded-xl shadow-xl"
            />
            <div className="mt-4 flex flex-col text-2xl text-gray-500 border p-8 rounded-xl  bg-gray-50 w-full md:w-1/2 shadow-xl items-start">
              <div>Date: {preview.date}</div>
              <p className="py-2" t>
                {preview.summary}
              </p>
              <button className="btn w-1/2">See more</button>
              <div className="flex pt-2 px-4">
                <h6 className="text-sm text-gray-400">{preview.id}</h6>{" "}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full grid grid-cols-3 md:grid-cols-4 mx-auto gap-2 mt-4 pb-4">
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
                  className="rounded-xl mx-auto md:w-4/5 shadow-xl cursor-pointer hover:opacity-80"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
