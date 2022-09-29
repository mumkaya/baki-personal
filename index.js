const words = ['designer', 'creative director','communication designer','technologist','gentleman','product designer', 'UX/UI Designer'];

$(document).ready(function() {
    let text = $('.text-fade');
    let textIndex = -1;
    let wordIndex = -1;

    function fadeText() {
      ++textIndex;
      ++wordIndex;
      text.text(words[wordIndex % words.length]);
      text.eq(textIndex % text.length)
          .fadeTo(2000, 1)
          .delay(2000)
          .fadeTo(2000, 0, fadeText);
    }

    fadeText();
});
