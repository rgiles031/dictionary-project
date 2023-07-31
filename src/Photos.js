import React from "react";

export default function Photos(props) {
  console.log(props);
  if (props.photos) {
    return (
      <section>
        <div className="row">
          {props.photos.map(function(photo, index) {
            return (
              <div className="col-4">
                <img
                  key={index}
                  src={photo.src.landscape}
                  className="img-fluid photo"
                  alt="photo of book"
                />
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
