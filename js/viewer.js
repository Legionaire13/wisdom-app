'use strict';
const input = document.getElementById("question")
const output = document.getElementById("answer")

function _clearPlaceholder() {
  return input.setAttribute("placeholder", "")
}

function _setDefaultPlaceholder() {
  return input.value = `${}`
  // return input.setAttribute("placeholder", "")
}

(function () {
  input.addEventListener("focus", _clearPlaceholder)
  input.addEventListener("blur", _setDefaultPlaceholder)
}());


export default {
  getInputValue: function () {
    return input.value;
  },

  renderResult: function (res) {
    return output.innerText = `"${res}"`;
  }
}
//# sourceMappingURL=viewer.js.map
