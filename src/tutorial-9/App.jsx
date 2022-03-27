import axios from 'axios';
import React, { useState } from 'react';

const App = () => {
  const [githubData, setGithubData] = useState({});
  const [inputFild, setInputFild] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const onChangeInput = (evt) => {
    setInputFild(evt.target.value);
  };

  const getGithubData = async (evt) => {
    evt.preventDefault();
    try {
      const { data } = await axios.get(`https://api.github.com/users/${inputFild}`);
      const history = window.history;
      const state = { login: inputFild };
      const title = '';
      const url = `/?login=${inputFild}`;
      history.pushState(state, title, url);

      setGithubData(data);
      setIsLoading(true);
    } catch (err) {
      setIsLoading(false);
      alert('Возникла ошибка при получении данных!');
    }
  };

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            value={inputFild}
            onChange={onChangeInput}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button onClick={getGithubData} className="app-form_btn">
            Найти
          </button>
        </form>
        {isLoading && (
          <div className="app-user">
            <div className="app-user_info">
              <div className="app-user_image">
                <img src={githubData.avatar_url} alt="" />
              </div>
              <div className="app-user_data">
                <h1 className="app-user_name">
                  {githubData.name}
                  <span>{githubData.Archakov06}</span>
                </h1>
                <p className="app-user_about">{githubData.bio}</p>
              </div>
            </div>
            <ul className="app-user_stats">
              <li className="app-user_stats-item">
                Репозитории
                <span>{githubData.public_repos}</span>
              </li>
              <li className="app-user_stats-item">
                Подписчиков
                <span>{githubData.followers}</span>
              </li>
              <li className="app-user_stats-item">
                Звёзд
                <span>{githubData.public_gists}</span>
              </li>
            </ul>
            <ul className="app-user_location">
              <li className="app-user_location-item">{githubData.location}</li>
              <li className="app-user_location-item">
                <a href={githubData.blog}>{githubData.blog}</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
