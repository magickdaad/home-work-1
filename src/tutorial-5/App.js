import React from 'react';
import EmptyBlock from './components/EmptyBlock';
import Phrase from './components/Phrase';

const App = () => {
  const adjectivesArr = [
    'абсолютный',
    'адский',
    'азартный',
    'активный',
    'ангельский',
    'астрономический',
    'баснословный',
    'безбожный',
    'безбрежный',
    'безвозвратный',
    'безграничный',
    'бездонный',
    'бездушный',
    'безжалостный',
    'замечательно',
    'замечательный',
    'записной',
    'запредельный',
    'заядлый',
    'звериный',
    'зверский',
    'зеленый',
    'злой',
    'злостный',
    'значительный',
    'неоспоримый',
    'неотразимый',
    'неоценимый',
    'непередаваемый',
  ];

  const nounsArr = [
    'лгун',
    'день',
    'конь',
    'олень',
    'человек',
    'программист',
    'ребёнок',
    'конец',
    'город',
    'дурак',
  ];

  const [arrPhrases, setArrPhrases] = React.useState([]);

  const clickOnGenerate = () => {
    const randAdjective = Math.floor(Math.random() * adjectivesArr.length);
    const randNoun = Math.floor(Math.random() * nounsArr.length);
    setArrPhrases([`${adjectivesArr[randAdjective]} ${nounsArr[randNoun]}`, ...arrPhrases]);
  };

  const clickOnClear = () => {
    setArrPhrases([]);
  };

  return (
    <div className="wrapper">
      <div className="list">
        {arrPhrases.length === 0 ? (
          <EmptyBlock />
        ) : (
          arrPhrases.map((elem, index) => <Phrase key={index} text={elem} />)
        )}
      </div>
      <button onClick={clickOnGenerate} className="btn btn_generate">
        Сгенерировать
      </button>
      <button onClick={clickOnClear} className="btn btn_clear">
        Очистить
      </button>
    </div>
  );
};

export default App;
