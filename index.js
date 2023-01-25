const myEmojis = ["👨‍💻", "⛷", "🍲"];

let emojiContainer = document.getElementById("emoji-container");
let pushBtn = document.getElementById("push-btn");
let unshiftBtn = document.getElementById("unshift-btn");
let popBtn = document.getElementById("pop-btn");
let shiftBtn = document.getElementById("shift-btn");
let emojiInput = document.getElementById("emoji-input");

function rendor() {
  emojiContainer.innerHTML = "";
  for (let i = 0; i < myEmojis.length; i++) {
    let emoji = document.createElement("span");
    emoji.textContent += myEmojis[i];
    emojiContainer.append(emoji);
  }
}

rendor();

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.push(emojiInput.value);
    emojiInput.value = "";
    rendor();
  } else {
    console.log("Please type an emoji");
  }
});

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value);
    emojiInput.value = "";
    rendor();
  } else {
    console.log("Please type an emoji");
  }
});

popBtn.addEventListener("click", function () {
  myEmojis.pop();
  rendor();
});

shiftBtn.addEventListener("click", function () {
  myEmojis.shift();
  rendor();
});
