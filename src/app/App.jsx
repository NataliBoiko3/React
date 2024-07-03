
import './App.css';
import photo1 from './images/photo1.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Мой профиль 👩</h1>
      </header>

      <main className='App-main'>
        <div className='profile-card'>
        <img src={photo1} alt="Мое фото"  className="profile-image" />
          <h2>Наталья Бойко</h2>
          <p>Учусь,сейчас начался курс по Frontend</p>
          <h3>Мои хобби😉</h3>
          <ul>
            <li>Люблю читать все, кроме ужастиков</li>
            <li>Путешествовать вместе с семьей</li>
          </ul>
        </div>
      </main>

      <footer className='App-footer'>
        <p>@2024 Наталья Бойко.Все права защищены.</p>
      </footer>
</div>
  );
}

export default App;
