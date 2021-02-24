/*
 * Slider configuration
 * @var {number} interval - Set interval in seconds if @var {bool} autoplay is true
 * @var {bool} autoplay - Set autoplay on mount component
 * @var {bool} infinite - Set to infinite slider
 * @var {number} slidesOnPage - Set the count of the slides on the screen (1-4)
 */

export const interval = 2;
export const autoplay = false;
export const infinite = false;
export let slidesOnPage = -2;

slidesOnPage > 4 ? (slidesOnPage = 4) : slidesOnPage;
slidesOnPage < 1 ? (slidesOnPage = 1) : slidesOnPage;
