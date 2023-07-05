import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import  store  from './store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
    </Provider>
);
/// 1 - Создать  header (где будет навигация с страницами) переключаться можно динамически через роутинг.
//      Страницы в HEADER (Главная с списком товаров, страница с добавлением нового товара в существующий список
//      и страница корзина но можно сделать кнопку корзины и будет всплывать как модальное окно по средине экрана)
        // КОРЗИНА - ( включает в себя счетчик товаров и кнопку удалить товары из корзины!)
//  2 - В папке товарс компонент с товарами и с подключенным редаксом (тулкит) все состояние храним в редаксе
//  3 - Отобразить список товаров и использовать свою стилизацию
//  4 - Сделать кнопку удаления товара с страницы.
//  5 - На странице где добавление товара будет Форма с использованием Formik
//      с формы должна быть отпрака POST запроса на сервер. 

// При клике на карточку товара - появляется боковая панель с права и высвечивается вся информация про товар с кнопкой купить)

// Продолжение проекта 
// 1 - доделать форму ! ( сделать отправку товаров нових на JSON сервер или на фаербейс)
// 2 - сделать поле в навигации ( логин и регистрация пользователя) данные должгы приходить на фаербейс 
// 3 - пагинация товаров ( подгружать по 10 товааров)
// 4 - сделать фильтрацию товаров по категориям! 
// --- Фильтрация должна быть на боковой панели слева от товаров
// 5-- Если пользователь админ вводит свои данные > то эму открывается панель с добавлением товаров 
