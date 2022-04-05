

function Dots({ activeIndex, onclick, sliderImage }:any) {
  return (
    <section className="all-dots">
      {sliderImage.map((slide :any, index:number) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </section>
  );
}

export default Dots;
