import img1 from '../../../../assets/images/ProductBoxImage/mebel.jpg';
import img2 from '../../../../assets/images/ProductBoxImage/domofon.jpg';

const listData = [
  {
    name: 'Abadlaşdırma',
    count: '0',
  },
  {
    name: 'Avadanlıqlar',
    count: '51',
  },
  {
    name: 'Avadanlıqlar üçün hissələr',
    count: '7',
  },
  {
    name: 'Avtomobil üçün aksesuarlar',
    count: '1',
  },
  {
    name: 'Avtomobillər və ehtiyyat hissələri',
    count: '9',
  },
  {
    name: 'Bağ',
    count: '1',
  },
  {
    name: 'Biznes və sənaye',
    count: '0',
  },
  {
    name: 'Çadırlar və tentlər',
    count: '1',
  },
  {
    name: 'Dekor və işıqlandırma',
    count: '1',
  },
  {
    name: 'Eksklyuziv əl işləri',
    count: '0',
  },
  {
    name: 'Ev heyvanları və zoo məhsullar',
    count: '0',
  },
  {
    name: 'Evə qulluq',
    count: '5',
  },
  {
    name: 'Fərdi qorunma vasitələri',
    count: '6',
  },
  {
    name: 'Geyim və aksesuarlar',
    count: '12',
  },
  {
    name: 'Gözəllik və sağlamlıq',
    count: '4',
  },
  {
    name: 'Hədiyyələr, hobbi',
    count: '21',
  },
  {
    name: 'İdman malları',
    count: '14',
  },
  {
    name: 'İstirahət, əyləncə',
    count: '8',
  },
  {
    name: 'Kabellər və birləşdiricilər',
    count: '0',
  },
  {
    name: 'Kənd təsərrüfatı',
    count: '6',
  },
];

const productData = [
  {
    id: 1,
    images: [img1],
    title: 'Mebel',
    cost: 60,
    rating: 4,
    article:
      'Sifarisle hazirlanir.Catdirilma ve qurasdirilma pulsuzdur.Olcu:200x300x45',
    contact: '+994123456789',
    location: 'Bakı',
    comment: 0,
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    view: 112,
  },
  {
    id: 2,
    images: [img2],
    title: 'Domofon',
    cost: 200,
    rating: 3,
    article: 'test',
    contact: '994123456789',
    location: 'Bakı',
    comment: 1,
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    view: 216,
  },
  {
    id: 3,
    images: [img2],
    title: 'Domofon',
    cost: 200,
    rating: 1,
    article: 'test2',
    contact: 'contact1',
    location: 'Bakı',
    comment: 1,
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    view: 98,
  },
  {
    id: 4,
    images: [img1],
    title: 'Mebel',
    cost: 140,
    rating: 5,
    article: 'test3',
    contact: 'contact2',
    location: 'Quba',
    comment: 2,
    feedbacks: {
      green: 0,
      red: 0,
      blue: 0,
    },
    view: 17,
  },
];

export { productData, listData };
