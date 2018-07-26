export default class SplitIntoRows {
  constructor(props) {
    this._container = props.container;
    this._text = props.container.textContent;
    this._init();
  }

  _init() {
    let container = this._container;
    let words = this._text.split(' ');
    let wordsLength = words.length;
    container.innerHTML = '<span></span>';
    let row = container.querySelector('span');
    let parentWidth = container.offsetWidth;
    row.style.whiteSpace = 'nowrap';

    for (let i = 0; i < wordsLength; i++) {
      //get current word with space
      let word = words[i];
      let editedWord = word + ' ';
      //caching old text value for new line
      let oldTextValue = row.textContent;
      //set new text value (add new word)
      row.textContent += editedWord;

      //if row width with new word bigger then parent width
      //create line with text value minus current word
      if (row.offsetWidth > parentWidth) {
        let newLine = document.createElement('span');
        newLine.textContent = oldTextValue;
        container.insertBefore(newLine, row);
        //reset row text value to current words with space
        row.textContent = editedWord;

        //remove if line is empty
        if (!newLine.textContent.length)
          newLine.parentNode.removeChild(newLine);
      }
      //if it's last word - remove white space and use this span for last line
      if (i === wordsLength - 1) row.removeAttribute('style');
    }
  }

  reinit() {
    this._init();
  }

  destroy() {
    this._container.textContent = this._text;
  }

  update() {
    this._text = this._container.textContent;
    this._init();
  }
}
