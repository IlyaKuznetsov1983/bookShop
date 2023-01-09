export default class BookStoreService {
  data = [

    {
      id: 1,
      title: "Journey to Ixtlan",
      author: "Carlos Castaneda",
      price: 7,
      coverImage:
        "https://1.bp.blogspot.com/-1gq5qJniluo/W4NqvUaDMyI/AAAAAAAAVrI/l6AjRRQAiQIsiHimg3HfrAwamaLZzr8oQCLcBGAs/s1600/Journey%2Bto%2BIxtlan%2B%25283%2529.jpg",
    },
    {
      id: 2,
      title: "«The Anarchist Cookbook»",
      author: "William Powell",
      price: 4000,
      coverImage:
        "https://m.media-amazon.com/images/I/41dqbeaRr3L._SX352_BO1,204,203,200_.jpg",
    },
    {
      id: 1,
      title: "Метро 2033",
      author: "Дмитрий Глуховский",
      price: 3,
      coverImage:
        "https://upload.wikimedia.org/wikipedia/ru/c/c2/Metro_2033_Eksmo.jpg",
    },
    {
      id: 2,
      title: "Кэмпо - традиция воинских искусств",
      author: "А.А.Долин,Г.В .Попов",
      price: 4,
      coverImage:
        "https://avatars.mds.yandex.net/get-mpic/4415357/img_id5845802033834847469.jpeg/orig",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.data);
      }, 1000);
    });
  }
}