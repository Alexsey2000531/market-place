# MarketPlace Frontend

Этот проект — клиентская часть маркетплейса, реализованная на React. Здесь реализованы:
- Авторизация пользователей
- Просмотр и добавление товаров в избранное
- Корзина с товарами
- Оформление заказа

## Технологии
- React 19
- Redux Toolkit
- React Router DOM
- Chakra UI, Styled Components, Emotion
- Formik
- Vite (сборка и запуск)
- TypeScript

## Быстрый старт

1. **Установите зависимости:**
   ```bash
   npm install
   ```
2. **Запустите проект в режиме разработки:**
   ```bash
   npm run dev
   ```
3. Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Скрипты
- `npm run dev` — запуск в режиме разработки
- `npm run build` — сборка production-версии
- `npm run preview` — предпросмотр production-сборки
- `npm run lint` — проверка кода линтером

## Структура проекта
- `src/components` — переиспользуемые компоненты (кнопки, инпуты, модалки и др.)
- `src/features` — бизнес-логика (корзина, избранное, пользователь и т.д.)
- `src/pages` — страницы приложения (главная, корзина, профиль и др.)
- `src/store` — настройка Redux store
- `src/routes` — роутинг

