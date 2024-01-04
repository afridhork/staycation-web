import React from "react";
import CompletedIllustration from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <section className="container" data-name="completed">
      <div className="container" style={{ marginBottom: 10 }}>
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-4">
            <img
              src={CompletedIllustration}
              className="img-fluid"
              alt="completed checkout apartment"
            />
            <p className="text-description">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
