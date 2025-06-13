interface IBook {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
}

export class Book implements IBook {
  public title;
  public contents;
  public url;
  public isbn;
  public datetime;
  public authors;
  public publisher;
  public translators;
  public price;
  public sale_price;
  public thumbnail;
  public status;

  protected constructor({
    title,
    contents,
    url,
    isbn,
    datetime,
    authors,
    publisher,
    translators,
    price,
    sale_price,
    thumbnail,
    status,
  }: IBook) {
    this.title = title;
    this.contents = contents;
    this.url = url;
    this.isbn = isbn;
    this.datetime = datetime;
    this.authors = authors;
    this.publisher = publisher;
    this.translators = translators;
    this.price = price;
    this.sale_price = sale_price;
    this.thumbnail = thumbnail;
    this.status = status;
  }

  public static create(data: IBook) {
    if (data instanceof Book) return data;
    return new Book(data);
  }

  get priceTag() {
    return `${this.price.toLocaleString()}원`;
  }

  get salePriceTag() {
    return `${this.sale_price.toLocaleString()}원`;
  }
}
