// Define variables
const textarea = document.getElementById("textarea")
const words_element = document.getElementById("word_counter")
const clear_button_element = document.getElementById("clear_button")

// Word counter function
function word_counter() {
  // Word detection
  const regex_pattern = /([^\u0000-\u007F]|\w)+/gi
  const word_checker = textarea.value.match(regex_pattern)
  // When one or more words detected
  if (word_checker !== null) {
    // Counting words
    const total_words = word_checker.length
    // Display words count
    if (total_words > 1) {
      // Display plural count
      words_element.innerHTML = "Words: " + total_words
    } else {
      // Display singular count
      words_element.innerHTML = "Word: " + total_words
    }
  } else {
    // When no word detected
    words_element.innerHTML = "Word: 0"
  }
}

