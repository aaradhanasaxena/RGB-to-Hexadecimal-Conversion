function rgbToHex(rgbString) {
  const rgbValues = rgbString.match(/\d+/g).map(Number);
  const hex = rgbValues.map(val => {
    const hexVal = val.toString(16);
    return hexVal.length === 1 ? '0' + hexVal : hexVal;
  });
  return '#' + hex.join('');
}
