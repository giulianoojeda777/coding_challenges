/*

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

function humanReadable(seconds) {
  var format = function (input) {
    return input < 10 ? "0" + input : input;
  };

  return [
    format(Math.floor(seconds / 3600)),
    format(Math.floor((seconds % 3600) / 60)),
    format(Math.floor(seconds % 60)),
  ].join(typeof separator !== "undefined" ? separator : ":");
}