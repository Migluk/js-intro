// 2 uzduotis
function countNumbers(array) {
    const counts = [];
  
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      if (num > 0) {
        counts[num] = (counts[num] || 0) + 1;
      }
    }
  
    for (let i = 0; i < counts.length; i++) {
      if (counts[i]) {
        console.log(i + ': ' + '*'.repeat(counts[i]));
      }
    }
  }
  
  const list = [1, 1, 2, 3, 3, 3, 4];
  countNumbers(list);

  // 1 uzduotis
const base = ['Vilnius', ]

  for (let i = 0; i < base.length; i++) {
    const miestas = base[i];
    const atstumas = base[i + 1];
  }
  console.log();
  