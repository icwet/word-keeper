# Тестовое задание. React
### [Описание](./test.pdf)

1. Для работы приложения нужна нода v12+
2. npm i
3. npm start

#### Структура приложения

Проект на typescript
Корневой компонент приложения находится в /src/components/App/index.tsx

```
├── public
└── src
    ├── api
    ├── components
    │   ├── App
    │   │   └── Actions
    │   ├── DraggedWord
    │   ├── Filter
    │   │   ├── -PartOfSpeech
    │   │   └── -Search
    │   │       └── img
    │   ├── Loader
    │   ├── Main
    │   ├── Menu
    │   │   ├── -Logo
    │   │   └── -Starred
    │   │       └── img
    │   ├── Modal
    │   │   └── img
    │   ├── Starred
    │   ├── Word
    │   │   └── img
    │   └── Words
    └── db
```

./components/App/Actions/index.ts - здесь AppReducer обработчик событий useReducer содержащий всю логику приложения

/src/api/index.ts - здесь класс "Api" для работы с сетевыми запросами

/src/db/index.ts - здесь класс для работы с indexedDB, использутся для сохранения слов добавленных в избренное

В проекте использовались 
 * [Styled-components 💅](https://styled-components.com/)
 * [Eslint](https://eslint.org/)
 * [Prettier](https://prettier.io/)
 * [Stylelint](https://stylelint.io/)
 * [Idb promises](https://github.com/jakearchibald/idb/tree/c0f45f50dfa62e754e155c1fee8e96bca443cdad)
 * [React-dnd](https://react-dnd.github.io/react-dnd/about)
 
 #### Возможности приложения
 1. Поиск слов из api [Words Api](https://www.wordsapi.com/)
 2. Добавление слов в избранное
 3. Менять поярдок слов в избранном
 4. Поиск слов и фильтрация по части речи
 5. Popup с подробной информации о слове.
 6. Сохранение добавленных слов в базе данных idb
 
