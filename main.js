function smoothScrollTo(element, duration = 3000) {
  const start = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top // ターゲット要素の相対位置を計算する
  const startTime =
    "now" in performance ? performance.now() : new Date().getTime();
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  // ページをスクロールさせるために繰り返し呼び出されるアニメーション関数
  const animation = (currentTime) => {
    const elapsedTime = currentTime - startTime; // アニメーション開始からの経過時間を算出
    // イージング関数に基づき、次のスクロール位置を算出
    const nextScrollPosition = easeInOutQuad(
      elapsedTime,
      start,
      targetPosition,
      duration
    );
    window.scrollTo(0, nextScrollPosition); // 計算された位置までページをスクロール
    if (elapsedTime < duration) requestAnimationFrame(animation); // 経過時間が継続時間より短い場合、アニメーションを継続
  };

  requestAnimationFrame(animation); // requestAnimationFrameを使用してアニメーションを開始
}
// DOMが完全に読み込まれるのを待つ
document.addEventListener("DOMContentLoaded", () => {
  // デモボタン要素の取得
  const demoButton = document.querySelector(".cta-button");

  // デモボタンにクリックイベントリスナーを追加する
  demoButton.addEventListener("click", (e) => {
    // デフォルトのJump-to動作を防止する
    e.preventDefault();

    // デモセクションの要素を取得する
    const demoSection = document.querySelector("#demo-section");

    // カスタムスムーズスクロール関数をゆっくりした時間（2000ms）で呼び出します。
    smoothScrollTo(demoSection, 1000);
  });
});


const ctaButton = document.querySelector(".cta-button");

ctaButton.addEventListener("mousemove", () => {

    ctaButton.style.transform = `translate(${Math.random() * 2}px, ${
      Math.random() * 2
    }px)`;
});

ctaButton.addEventListener("mouseout", () => {
  ctaButton.style.transform = "none";

});

