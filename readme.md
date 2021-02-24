![image](https://img.shields.io/badge/created%20by-evgenii--komornyi-blue) ![image](https://img.shields.io/badge/npm-v6.14.6-blue) ![image](https://img.shields.io/badge/reactjs-v17.0.1-green)

# Carousel

---

This is a carousel component that was created by HTML5, CSS3 and ReactJS.

---

## Install

`git clone https://github.com/evgenii-komornyi/Carousel.git`

`npm install`

`npm start`

---

## Configuration (/src/configs/config.js)

```javascript
export const interval = 2;
export const autoplay = false;
export const infinite = false;
export const slidesOnPage = 2;
```

| Parameter    | Type    | Description                                                                       | Possible values                                                                                        |
| ------------ | ------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| interval     | number  | Set interval in seconds for autoplay                                              | ![image](https://img.shields.io/badge/min-1-green) ![image](https://img.shields.io/badge/max-∞-red)    |
| autoplay     | boolean | If autoplay is true, frames are switching while the mouse is not on the component | ![image](https://img.shields.io/badge/true-black) / ![image](https://img.shields.io/badge/false-black) |
| infinite     | boolean | Set to infinite slider                                                            | ![image](https://img.shields.io/badge/true-black) / ![image](https://img.shields.io/badge/false-black) |
| slidesOnPage | number  | Set the count of the slides on the screen                                         | ![image](https://img.shields.io/badge/min-1-green) ![image](https://img.shields.io/badge/max-4-red)    |

---
