const matrixCode = document.querySelector(".matrix-code");
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234酒56789!@#$%^&*()_+-=[]{}|;:,.<>?/\\`~ΔΘΛΞΠ死ΣΨΩαβ䷀䷁䷂䷃䷄䷅䷆䷇䷈䷉䷊䷋䷌䷍䷎䷏䷐䷑䷒䷓䷔䷕ﾜﾛｽ䷖䷗䷘䷙䷚䷛䷜䷝䷞䷟猫䷠䷡䷢䷣䷤䷥䷦䷧䷨䷩䷪䷫䷬䷭䷮䷯䷰䷱䷲䷳䷴䷵䷶䷷䷸䷹䷺䷻䷼䷽䷾䷿γδεζηθλμνξπρστυφχψωǂǁ∞≠≤≥∈∉∂∑∏⌈⌉⌊⌋〈〉⌥";

const numColumns = 60;

function getRandomCharacter() {
  return characters.charAt(Math.floor(Math.random() * characters.length));
}

function createColumn() {
  const column = document.createElement("div");
  for (let i = 0; i < 70; i++) {
    const char = document.createElement("span");
    char.textContent = getRandomCharacter();
    char.style.animationDelay = `${Math.random() * 5}s`;
    column.appendChild(char);
  }
  return column;
}

for (let i = 0; i < numColumns; i++) {
  matrixCode.appendChild(createColumn());
}
