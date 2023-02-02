const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = 0;

  const updateCounter = () => {
    const targetCount = +counter.getAttribute("data-target");
    const initialCount = Number(counter.innerHTML);
    const incrementCounter = targetCount / 100;

    if (initialCount < targetCount) {
      counter.innerHTML = `${Math.round(initialCount + incrementCounter)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerHTML = targetCount;
    }
  };
  updateCounter();
});
