function HeroSlide() {
  function scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hero-slide">
      <p className="eyebrow">Your Movie Guide</p>
      <h1 className="hero-title">
        Screen<span className="green">Vault</span>
      </h1>
      <p className="hero-sub">Discover movies worth watching — English &amp; Telugu</p>
      <div className="hero-divider"></div>
      <button className="scroll-btn" onClick={() => scrollTo("slide-english")}>
        Explore Movies ↓
      </button>
    </div>
  );
}

export default HeroSlide;
