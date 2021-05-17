class Rectangle {
  // !class обязан создаваться с заглавной буквы!
  constructor(height, width) {
    //? тут объявляем переменные которые буду доступны для любой функции! (через this)
    this.height = height;
    this.width = width;
  }
  //? (СОЗДАЁМ МЕТОД В КЛАССЕ!)
  maxSum() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  //? extends Rectangle будет родителем для ColorRectangleWithText = говорим что наш только-что созданный класс будет наследоваться от уже существующего! (Rectangle)
  constructor(height, width, text, bgColor) {
    super(height, width); //?SUPER - ДОЛЖЕН ВЫЗЫВАТЬСЯ РАНЬШЕ ВСЕХ! говорит, что мы будем наследовать от родителя его определённый аргументы переданные в скобках;
    this.text = text;
    this.bgColor = bgColor;
  }

  submit() {
    console.log(`Текст ${this.text}, цвет ${this.bgColor}, высота ${this.height}, ширина: ${this.bgColor}`);
  }
}
// Похожый синтаксис, что и функций конструктора!;
const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);
const color = new ColoredRectangleWithText(20, 20, "Hello", "black"); //! даже при наследовании мы обязаны указывать аргументы!

console.log(square.maxSum());
console.log(long.maxSum());
color.submit();
