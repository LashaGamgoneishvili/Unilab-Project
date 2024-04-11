const section = document.querySelector(".section");
const header = document.querySelector(".header");

export default function interObserver() {
  const obs = new IntersectionObserver(
    function (entries) {
      const ent = entries[0];
      console.log(ent);
      if (ent.isIntersecting) {
        header.classList.add("sticky");
      }
    },
    {
      root: null,
      threshold: 0,
    }
  );
  obs.observe(section);
}

interObserver();
