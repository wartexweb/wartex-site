document.addEventListener("DOMContentLoaded", () => {

    const intro = document.getElementById("wartexIntro");

    if (!intro) return;

    const logo = intro.querySelector(".wartex-intro-logo");
    const line = intro.querySelector(".wartex-intro-line");
    const title = intro.querySelector(".wartex-intro-title");
    const subtitle = intro.querySelector(".wartex-intro-subtitle");

    // Logo
    setTimeout(() => {
        logo.style.transition =
            "opacity 0.8s ease, transform 0.8s cubic-bezier(.16,1,.3,1)";

        logo.style.opacity = "1";
        logo.style.transform = "scale(1)";
    }, 300);

    // Çizgi
    setTimeout(() => {
        line.style.transition =
            "width 0.7s cubic-bezier(.16,1,.3,1)";

        line.style.width = "180px";
    }, 1100);

    // Başlık
    setTimeout(() => {
        title.style.transition =
            "opacity 0.6s ease, transform 0.6s cubic-bezier(.16,1,.3,1)";

        title.style.opacity = "1";
        title.style.transform = "translateY(0)";
    }, 1500);

    // Alt yazı
    setTimeout(() => {
        subtitle.style.transition =
            "opacity 0.6s ease, transform 0.6s cubic-bezier(.16,1,.3,1)";

        subtitle.style.opacity = "1";
        subtitle.style.transform = "translateY(0)";
    }, 1900);

    // Intro kapanışı
    setTimeout(() => {

        intro.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        intro.style.opacity = "0";
        intro.style.transform = "scale(1.03)";

        setTimeout(() => {
            intro.remove();
        }, 850);

    }, 4300);

});
