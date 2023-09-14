const convertToCelsius = function(inputF) {
  return Math.round(((inputF - 32) * 5 / 9) * 10) / 10
};

const convertToFahrenheit = function(inputC) {
  return Math.round((inputC * 9 / 5 + 32) * 10) / 10

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
