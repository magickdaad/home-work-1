import ProfileFunction from './components/ProfileFunction';
import ProfileClass from './components/ProfileClass';

function App() {
  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  return (
    <div className="profile-list">
      <ProfileFunction
        name="Вася Пупкин"
        registredAt={new Date(2021, 5, 22).toLocaleDateString('ru-RU', options)}
      />
      <ProfileClass
        name="Катя Иванова"
        registredAt={new Date(2021, 10, 12).toLocaleDateString('ru-RU', options)}
      />
    </div>
  );
}

export default App;
