
# tkinterモジュールをインポート
import tkinter as tk
import random


# キャラクタークラスを定義
class Character:
    def __init__(self, name, gender, age, job, image, x, y):
        # 基本的な属性
        self.name = name
        self.gender = gender
        self.age = age
        self.job = job
        # GUI用の属性
        self.image = tk.PhotoImage(file=image)  # 画像ファイルを読み込んでPhotoImageオブジェクトに変換
        self.x = x  # 画像の表示位置（x座標）
        self.y = y  # 画像の表示位置（y座標）
        # 感情的な属性（ランダムに値を与える）
        self.feeling = random.choice(["love", "like", "neutral", "dislike", "hate"])  # 想いの強さ
        self.reason = random.choice(["appearance", "personality", "interest", "fate", "other"])  # 想いの理由
        self.history = random.choice(["childhood friend", "classmate", "colleague", "neighbor", "stranger"])  # 想いの経緯
        # 行動的な属性（ランダムに値を与える）
        self.reaction = random.choice(["happy", "surprised", "confused", "sad", "angry"])  # 感情の反応
        self.action = random.choice(["approach", "avoid", "ignore", "confront", "support"])  # 行動の選択
        self.result = random.choice(["success", "failure", "neutral", "unknown"])  # 行動の結果


# 物語クラスを定義
class Story:
    def __init__(self, master):
        # キャラクタークラスのインスタンスを作成
        self.a = Character("A", "male", 20, "student", "a.png", 100, 200)
        self.b = Character("B", "female", 19, "student", "b.png", 300, 200)
        self.c = Character("C", "male", 21, "teacher", "c.png", 500, 200)
        # GUI用のウィジェットを作成
        self.master = master  # ルートウィンドウを属性として持つ
        self.master.title("BSS Generator")  # ウィンドウのタイトルを設定
        self.canvas = tk.Canvas(self.master, width=600, height=600)  # キャンバスを作成
        self.canvas.pack()  # キャンバスを配置
        self.button = tk.Button(self.master, text="Generate BSS Situation", command=self.generate)  # ボタンを作成
        self.button.pack()  # ボタンを配置

    # キャラクターの画像と名前を表示するメソッド
    def show_characters(self):
        # キャンバスに画像と名前を描画
        self.canvas.create_image(self.a.x, self.a.y, image=self.a.image)  # Aの画像を表示
        self.canvas.create_text(self.a.x, self.a.y + 100, text=self.a.name)  # Aの名前を表示
        self.canvas.create_image(self.b.x, self.b.y, image=self.b.image)  # Bの画像を表示
        self.canvas.create_text(self.b.x, self.b.y + 100, text=self.b.name)  # Bの名前を表示
        self.canvas.create_image(self.c.x, self.c.y, image=self.c.image)  # Cの画像を表示
        self.canvas.create_text(self.c.x, self.c.y + 100, text=self.c.name)  # Cの名前を表示

    # BとCが出会うメソッド
    def meet_bc(self):
        # BとCの想いの強さや理由や経緯を変更
        self.b.feeling = "love"
        self.b.reason = random.choice(["appearance", "personality", "interest", "fate", "other"])
        self.b.history = random.choice(["childhood friend", "classmate", "colleague", "neighbor", "stranger"])
        self.c.feeling = "love"
        self.c.reason = random.choice(["appearance", "personality", "interest", "fate", "other"])
        self.c.history = random.choice(["childhood friend", "classmate", "colleague", "neighbor", "stranger"])
        # BとCの反応や感情や行動を表示
        self.canvas.create_text(300, 50, text="B and C met and fell in love.")  # 出会いと恋に落ちたことを表示
        self.canvas.create_text(300, 100, text=f"B's feeling: {self.b.feeling}")  # Bの想いの強さを表示
        self.canvas.create_text(300, 150, text=f"B's reason: {self.b.reason}")  # Bの想いの理由を表示
        self.canvas.create_text(300, 200, text=f"B's history: {self.b.history}")  # Bの想いの経緯を表示
        self.canvas.create_text(300, 250, text=f"C's feeling: {self.c.feeling}")  # Cの想いの強さを表示
        self.canvas.create_text(300, 300, text=f"C's reason: {self.c.reason}")  # Cの想いの理由を表示
        self.canvas.create_text(300, 350, text=f"C's history: {self.c.history}")  # Cの想いの経緯を表示

    # AがBとCの関係を知るメソッド
    def know_ab(self):
        # Aの反応や感情や行動を表示
        self.canvas.create_text(300, 400, text="A found out that B and C are in love.")  # BとCの関係を知ったことを表示
        self.canvas.create_text(300, 450, text=f"A's reaction: {self.a.reaction}")  # Aの感情の反応を表示
        self.canvas.create_text(300, 500, text=f"A's action: {self.a.action}")  # Aの行動の選択を表示
        self.canvas.create_text(300, 550, text=f"A's result: {self.a.result}")  # Aの行動の結果を表示

    # BSSシチュエーションを生成するメソッド
    def generate(self):
        # キャンバスをクリア
        self.canvas.delete("all")
        # キャラクターの画像と名前を表示
        self.show_characters()
        # BとCが出会うメソッドを呼び出す
        self.meet_bc()
        # AがBとCの関係を知るメソッドを呼び出す
        self.know_ab()


# ルートウィンドウを作成
root = tk.Tk()
# 物語クラスのインスタンスを作成
story = Story(root)
# メインループを開始
root.mainloop()
