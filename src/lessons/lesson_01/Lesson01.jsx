// импортируем стили из соседнего файла

import './lesson01.css'
 // описание всего приложения в глобальном объекте document
  // это и есть DOM (Document Object Model)
  // console.dir(document);

  // создаем переменную со значением в теле функции до return
export default function Lesson01() {
    const heading = 'Урок 01'
    const classContainer = 'lesson-container'
    
    function formatName(user) {
        return `Имя: ${user.name}, фамилия: ${user.lastName}🧒`

    }

    const user = {
        name: 'John',
        lastName: 'Doe'
    }


    const  isLogin = true

    
    return (
      <div className={classContainer}>
        <h4>{heading}</h4>
        <h5>Особенности компонента:</h5>
        <ul>
          <li>Имеет расширение JSX</li>
          <li>Называется с большой буквы</li>
          <li>Компонент это функция</li>
          <li>Возвращает верстку</li>
          <li>Использует import / export</li>
          <li>Не отобразится на странице, если не импортирован</li>
        </ul>
        <p>Пример работы с динамическими данными</p>
        <span>{formatName(user)}</span>
        <h5>Пример условного отображенияс тернарным оператором</h5>
        <span>Пользователь  {isLogin ? 'в данный момент' : 'не'} авторизован</span>
      </div>
    );
  }