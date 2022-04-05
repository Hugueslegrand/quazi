

function Arrows({ prevSlide, nextSlide }:any) {
  return (
    <section className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </section>
  );
}

export default Arrows;
