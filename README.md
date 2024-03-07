# Random

## This package helps with common uses for Math.random()

### Add to project

```bash
pnpm add @coleblender/random
```

```bash
npm i @coleblender/random
```

```bash
yarn add @coleblender/random
```

### Import to file

```bash
import random from "@coleblender/random"
```

### Functions

#### 1. random.shuffle(array: T[])

```bash
   const shuffledArray = random.shuffle(array)
```

- Accepts array: T[]
- Returns shuffled array
- Does not modify original array

#### 2. random.index(arrayLength: number)

```bash
const randomIndex = random.index(array.length)
```

- Accepts arrayLength: number
- Returns random index given array length

#### 3. random.choice(array: T[])

```bash
const randomChoice = random.choice(array)
```

- Accepts array: T[]
- Returns random element from array

#### 4. random.int(min: number, max: number)

```bash
const randomInt = random.int(min, max)
```

- Accepts min: number and max: number
- Returns random integer [min, max] (includes both min and max)
- Throws error if min > max

#### 5. random.float(min: number, max: number)

```bash
const randomFloat = random.float(min, max)
```

- Accepts min: number and max: number
- Returns random float [min, max) (includes min and excludes max)
- Throws error if min > max

#### 6. random.bool()

```bash
const randomBool = random.bool()
```

- Accepts nothing
- Returns random boolean value (true or false)

#### 7. random.zScore()

```bash
const randomZScore = random.zScore()
```

- Accepts nothing
- Returns random z-score given a normal distribution, a mean of 0, and SD of 1

#### 8. random.percentile()

```bash
const randomPercentile = random.percentile()
```

- Accepts nothing
- Returns random percentile with a normal distribution (0, 1)

#### 9. random.valueInDistribution(mean: number, stdDeviation: number)

```bash
const randomValue = random.valueInDistribution(mean, stdDeviation)
```

- Accepts mean: number and stdDeviation: number
- Returns random float from the normal distribution
