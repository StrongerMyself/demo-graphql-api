# API graphql demo

## Скрипты
- `yarn` - установка зависимостей
- `yarn start` - старт проекта
- `yarn dev` - старт проекта в режиме разработки
- `yarn build` - сборка проекта
- `yarn codegen` - генерация TS типов из SDL схемы
- `yarn seed` - заполнение рест апи фейковыми данными

## Эндпоинты
- http://localhost:8001/graphql
- http://localhost:8001/rest

## Структура
- `./src/entities` - описание gql сущностей
  - `./entity-name/resolver.ts` - резолверы сущности
  - `./entity-name/typedef.ts` - SDL схема сущности 
- `./src/graphql` - общие файлы graphql
  - `./resolvers.ts` - регистрация всех резолверов
  - `./schema.ts` - корневая SDL схема
  - `./data-loader.ts` - хелпер даталодера
- `./src/rest` - фейкловое рест апи, близкое к спеке json-api
  - `./seed.ts` - исполняемый файл генерации данных
  - `./models.ts` - модели для герации данных
  - `./db.json` - сгенерированная база данных
  - `./service.ts` - общие методы для получених данных их rest апи 
- `./src/config.ts` - константы
- `./src/server.ts` - сервер
- `./codegen.yaml` - конфиг для генерации TS типов
- `./global.d.ts` - сгенерированый файл с TS типами
- `./nodemon-dev.json` - конфиг для режима разработки
