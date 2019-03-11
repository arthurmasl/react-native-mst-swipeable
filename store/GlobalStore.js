import { types } from 'mobx-state-tree';
import colors from '../components/colors';

const Item = types.model({
  id: types.identifier,
  title: types.string,
  bg: types.string,
  text: types.string
});

const GlobalStore = types
  .model({
    items: types.array(Item),
    currentItem: types.identifier
  })
  .actions(self => ({
    // changeIndex(index) {
    //   self.index = index;
    // }
  }))
  .create({
    currentItem: '0',
    items: [
      {
        id: '1',
        title: 'LEE MON',
        bg: colors[4],
        text: 'Lee mon is a minimalist...'
      },
      {
        id: '2',
        title: 'BULMA',
        bg: colors[5],
        text: 'Bulma keep your start...'
      },
      {
        id: '3',
        title: 'SADIK',
        bg: colors[6],
        text: 'Leave your chill away..'
      },
      {
        id: '4',
        title: 'PIERE DEN',
        bg: colors[7],
        text: 'Piere keep your chill...'
      },
      {
        id: '5',
        title: 'SAN USE',
        bg: colors[8],
        text: 'San use is a life...'
      },
      {
        id: '6',
        title: 'MORTE ARE',
        bg: colors[4],
        text: "Can't hold our breathing..."
      }
    ]
  });

export default GlobalStore;
