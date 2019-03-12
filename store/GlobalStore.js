import { types } from 'mobx-state-tree';
import items from '../utils/data';
import colors from '../utils/colors';

const Item = types.model({
  id: types.identifier,
  title: types.string,
  bg: types.string,
  text: types.string,
  fullText: types.string,
  liked: types.boolean
});

const Tag = types.model({
  color: types.string,
  isActive: types.boolean
});

const GlobalStore = types
  .model({
    items: types.array(Item),
    currentItem: types.string,
    navOpened: types.boolean,
    tags: types.array(Tag)
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
    },
    changeNavState() {
      self.navOpened = !self.navOpened;
    },
    changeTagState(color) {
      self.tags = self.tags.map(item => {
        if (item.color === color) {
          return { ...item, isActive: !item.isActive };
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
    get likedItems() {
      return self.items.filter(item => item.liked === true);
    },
    get filteredByTag() {
      const activeColors = self.tags
        .filter(item => item.isActive)
        .map(item => item.color);

      const newList = [];

      activeColors.forEach(color => {
        self.items.forEach(item => {
          if (item.bg === color) {
            newList.push(item);
          }
        });
      });

      return newList;
    },
    currentItemView(id) {
      return self.items.filter(item => +item.id === +id);
    }
  }))
  .create({
    navOpened: false,
    currentItem: '5',
    items: items,
    tags: colors.map(item => ({ color: item, isActive: false }))
  });

export default GlobalStore;
