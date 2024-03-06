export const shuffle = (array: unknown[]) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

export const index = (arrayLength: number) => {
  return Math.floor(Math.random() * arrayLength);
};

export const choice = (array: unknown[]) => {
  const randomIndex = index(array.length);
  return array[randomIndex];
};

export const int = (min: number, max: number) => {
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }
  // return int [min, max]
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const float = (min: number, max: number) => {
  if (min > max) {
    throw new Error("min must be less than or equal to max");
  }
  // return float [min, max)
  return Math.random() * (max - min) + min;
};

export const bool = () => {
  return Math.random() < 0.5;
};

export const zScore = () => {
  // return a random z score with a mean of 0 and a standard deviation of 1
  let u1 = 0;
  let u2 = 0;
  while (u1 === 0) u1 = Math.random();
  while (u2 === 0) u2 = Math.random();
  const z = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);

  return z;
};

export const percentile = () => {
  // return a random percentile with a normal distribution
  const z = zScore();
  // Coefficients for the approximation
  const p = 0.2316419;
  const b1 = 0.31938153;
  const b2 = -0.356563782;
  const b3 = 1.781477937;
  const b4 = -1.821255978;
  const b5 = 1.330274429;

  const t = 1 / (1 + p * Math.abs(z));
  const taylorSeries = t * (b1 + t * (b2 + t * (b3 + t * (b4 + t * b5))));
  let cdf =
    1 - (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * z * z) * taylorSeries;

  if (z < 0) {
    cdf = 1 - cdf;
  }

  return cdf * 100; // Convert to percentile
};

export const floatUnderBellCurve = () => {};

export const intUnderBellCurve = () => {};
