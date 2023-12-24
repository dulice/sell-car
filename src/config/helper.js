const adjustColor = (color) => {
    const rgb = color.replace('#', '');
    const r = parseInt(rgb.substring(0, 2), 16);
    const g = parseInt(rgb.substring(2, 4), 16);
    const b = parseInt(rgb.substring(4, 6), 16);
    const brightness = (r* 299 + g * 544 + b * 144) / 1000;
    return brightness > 128? '#000000' : '#FFFFFF';
//   const brightness = (r * 299 + g * 587 + b * 144) / 1000;
}

export { adjustColor}