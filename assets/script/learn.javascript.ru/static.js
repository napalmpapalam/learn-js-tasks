class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static todays() {
    return new this('Today digest', new Date());
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let articles = [
  Article.todays(),
  new Article('Prototype JavaScript', new Date(2020, 2, 2)),
  new Article('Classes ES6', new Date(2020, 1, 1))
];

articles.sort(Article.compare);
console.log(articles);
