const clock = document.getElementById('clock');


const digitSegments = {
  '0': [0,1,2,4,5,6],
  '1': [2,5],
  '2': [0,2,3,4,6],
  '3': [0,2,3,5,6],
  '4': [1,2,3,5],
  '5': [0,1,3,5,6],
  '6': [0,1,3,4,5,6],
  '7': [0,2,5],
  '8': [0,1,2,3,4,5,6],
  '9': [0,1,2,3,5,6]
};


function createDigit() {
  const digit = document.createElement('div');
  digit.className = 'digit';
  for (let i = 0; i < 7; i++) {
    const seg = document.createElement('div');
    seg.className = 'segment fragment-0';
    switch (i) {
      case 0: seg.classList.add('top'); break;
      case 1: seg.classList.add('top-left'); break;
      case 2: seg.classList.add('top-right'); break;
      case 3: seg.classList.add('middle'); break;
      case 4: seg.classList.add('bottom-left'); break;
      case 5: seg.classList.add('bottom-right'); break;
      case 6: seg.classList.add('bottom'); break;
    }
    digit.appendChild(seg);
  }
  return digit;
}


function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString('en-US', { hour12: false }).replace(/:/g, '');

  const digits = clock.querySelectorAll('.digit');

  for (let i = 0; i < timeStr.length; i++) {
    const num = timeStr[i];
    const segments = digits[i].querySelectorAll('.segment');
    segments.forEach((seg, idx) => {
      if (digitSegments[num].includes(idx)) {
        seg.style.visibility = 'visible';
      } else {
        seg.style.visibility = 'hidden';
      }
    });
  }
}


function fragmentSegments() {
  const segments = clock.querySelectorAll('.segment');

  segments.forEach(seg => {
    let level = parseInt(seg.getAttribute('data-fragment') || '0');
    if (Math.random() < 0.05 && level < 3) { 
      level++;
      seg.classList.remove(`fragment-${level - 1}`);
      seg.classList.add(`fragment-${level}`);
      seg.setAttribute('data-fragment', level);
    }
  });
}


for (let i = 0; i < 6; i++) { 
  clock.appendChild(createDigit());
}

updateClock();
setInterval(updateClock, 1000);
setInterval(fragmentSegments, 3000); 
