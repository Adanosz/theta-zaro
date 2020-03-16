/* 
1, Adattípusok

Egyszerű adattípus:
  Number (szám): 
  let a = 5

  String (szöveg):
  Let b = 'Ez egy string'

  Boolean (logikai érték)
  a === b --> false


Speciális adattípusok:
  null
  let d = null;
  undefined
  let e;

Összetett adattípusok:
Array - Tömb
let f = [1, 2, 3];

Object - Objektumok
  let tanuló = {
    Név: Peti
    Kor: 28
    Magasság: 186
  };

Egysszerű adattípusoknál, mikor a paraméter átadás érték szerint történik, ha egy új változó értékének megadjuk a korábban létrehozott változót, az megkapja az értéket,
 és ha ennek az új változónak az értékét módosítjuk akkor az eredeti változónk értéke nem változik.
Pl:
let a = 5;
let b = a;
b = 12; 
Ilyenkor az 'a' értéke nem változik, marad az eredeti, viszont b értékét megváltoztattuk.

Összetett adattípusoknál a paraméterátadás referencia szerint történik, ha az újonnan létrehozott változón módosítunk, akkor az eredeti változó is módosul
Pl:
let a = ['alma', 'körte', 'szilva',  'banán'];
let b = a;
let a[4] = 'paradicsom'
Ekkor az a és b értéke is ['alma', 'körte', 'szilva',  'banán', 'paradicsom'] lesz.
*/

// 3. Összeadás tétele:
const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
};
const poloskArray = [1, 2, 3, 4, 5];
console.log(sumArray(poloskArray));



// 4. Megszámlálás tétele:
const countElement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};

console.log(countElement(3, poloskArray));


// 5. Switch statement

const poloskaNum = (num) => {
  let confirm = 'Bizonyám'  //justForFun
  switch (num) {
    case 1: console.log (num + ' poloskád van')
    break;
    case 2: console.log (num + ' poloskád van')
    break;
    case 3: console.log (num + ' poloskád van')
    break;
    default: console.log('Mond mennyi poloska van')
  }
  return confirm
}

console.log(poloskaNum(2))

// 6. Metszet

const intersection = (array1, array2) => {
  const intersect = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        intersect.push(array1[i]);
        break;
      }
    }
  }
  return intersect;
};

console.log('A két tömb metszete', intersection([5, 9, 11, 17, 13, 7, 1, 2], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// 7. Feladat: modulok
const sum = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const divide = (a, b) => {
  return a / b;
}

const multipl = (a, b) => {
  return a * b;
}

module.export = {
  sum: sum,
  sub: subtract,
  div: divide,
  mult: multipl
};

// 8. Feladat 2dArray

const generate2dArray = (n, m) => {
  let power = 0;
  const solutionMatrix = [];
  for (let i = 0; i < n; i++) {
    const arr = [];
    for (let j = 0; j < m; j++) {
      arr.push(Math.pow(2, power));
      power++;
    }
    solutionMatrix.push(arr);
  }
  return solutionMatrix;
};
console.log(generate2dArray(3, 3))
;