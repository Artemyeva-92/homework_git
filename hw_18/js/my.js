function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let block = document.querySelector('.block');
  const movingBlock = setInterval(() => {
    block.style.left = getRandomIntInclusive(0, (document.body.clientWidth - block.offsetWidth))  + `px`;
    block.style.top = getRandomIntInclusive(0, (document.body.clientHeight - block.offsetHeight)) + `px`;
  }, 1000);

  const colorBlock = setInterval(() => {
    block.style.backgroundColor = (`rgb(${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)},${getRandomIntInclusive(0, 255)})`)
  }, 500);


