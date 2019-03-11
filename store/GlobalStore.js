import { types } from 'mobx-state-tree';
import colors from '../components/colors';

const Item = types.model({
  id: types.identifier,
  title: types.string,
  bg: types.string,
  text: types.string,
  fullText: types.string,
  liked: types.boolean
});

const GlobalStore = types
  .model({
    items: types.array(Item),
    currentItem: types.string
  })
  .actions(self => ({
    setCurrentItem(id) {
      self.currentItem = id;
    },
    like(id) {
      self.items = self.items.map(item => {
        if (+item.id === +id) {
          return { ...item, liked: !item.liked };
        }
        return item;
      });
    }
  }))
  .views(self => ({
    get featuredItems() {
      return self.items.filter(item => +item.id <= 3);
    },
    get objectsItems() {
      return self.items.filter(item => +item.id > 3);
    },
    get similarItems() {
      return self.items.filter(item => +item.id % 2 === 0);
    },
    currentItemView(id) {
      return self.items.filter(item => +item.id === +id);
    }
  }))
  .create({
    currentItem: '5',
    items: [
      {
        id: '1',
        title: 'PIERE DEN',
        bg: colors[1],
        text: 'Lee mon is a minimalist...',
        fullText:
          'Lorem ipsum dolor sit platea hendrerit sagittis congue dui magna diam sodales senectus habitasse velit facilisis',
        liked: false
      },
      {
        id: '2',
        title: 'SAN USE',
        bg: colors[2],
        text: 'Leave your chill away..',
        fullText:
          'Lorem ipsum dolor sit amet consectetur adipiscinggittis congue dui magna diam sodales senectus habitasse velit facilisis',
        liked: false
      },
      {
        id: '3',
        title: 'LEE MON',
        bg: colors[3],
        text: 'Lee mon is a minimalist...',
        fullText:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit platea hendrerit sagittis congue dui magna diam sodales senectus habitasse velit facilisis',
        liked: false
      },

      {
        id: '4',
        title: 'LEE MON',
        bg: colors[4],
        text: 'Lee mon is a minimalist...',
        fullText:
          'Lorem ipsum dolor sit amem sodales senectus habitasse velit facilisis',
        liked: false
      },
      {
        id: '5',
        title: 'BULMA',
        bg: colors[5],
        text: 'Bulma keep your start...',
        fullText:
          'Lorem ipsum dolor sit amet consectetur a diam sodales senectus habitasse velit facilisis',
        liked: false
      },
      {
        id: '6',
        title: 'SADIK',
        bg: colors[6],
        text: 'Leave your chill away..',
        fullText:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit platea hsodales senectus habitasse velit facilisis',
        liked: false
      },
      {
        id: '7',
        title: 'PIERE DEN',
        bg: colors[7],
        text: 'Piere keep your chill...',
        fullText:
          'Lorem ipsum dolscing elit platea hendrerit sagittis congue dui magna diam sodales senectus acilisis',
        liked: false
      },
      {
        id: '8',
        title: 'SAN USE',
        bg: colors[8],
        text: 'San use is a life...',
        fullText:
          'Lorem ipsum dolor sit amet piscing elit platea hendrerit sagittis congue dui magctus habitasse velit facilisis',
        liked: false
      },
      {
        id: '9',
        title: 'MORTE ARE',
        bg: colors[4],
        text: "Can't hold our breathing...",
        fullText:
          'Lorem ipsum doltetur adipiscing elit platea hendrerit sagittis congue dui tus habitasse velit facilisis',
        liked: false
      }
    ]
  });

export default GlobalStore;
