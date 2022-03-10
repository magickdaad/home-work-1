import React from 'react';
import { Button, Paper, TextField } from '@mui/material';
import Review from './components/Review';
import { AppContext } from './context';
import { dateOptions } from './options';

const App = () => {
  const inputName = React.useRef();
  const inputEmail = React.useRef();
  const inputMessage = React.useRef();

  const [comments, setComments] = React.useState([]);
  React.useEffect(() => {
    const rows = localStorage.getItem('comments') || [];
    setComments(JSON.parse(rows));
  }, []);
  React.useEffect(() => localStorage.setItem('comments', JSON.stringify(comments)), [comments]);

  const handleClickButton = (evt) => {
    evt.preventDefault();
    setComments(() => [
      ...comments,
      {
        fullName: inputName.current.value,
        email: inputEmail.current.value,
        createdAt: new Date().toString().split(' GMT')[0],
        text: inputMessage.current.value,
      },
    ]);
    evt.target.reset();
  };

  const deleteComment = (index) => {
    const newArrComments = comments.filter((comment, i) => index !== i);
    setComments(newArrComments);
  };

  return (
    <div className="feedback">
      <Paper className="feedback__reviews reviews" elevation={1}>
        <h2 className="reviews__title">Отзывы:</h2>
        <AppContext.Provider value={{ deleteComment }}>
          {comments &&
            comments.map((comment, index) => {
              return (
                <Review key={index} index={index} name={comment.fullName} message={comment.text} />
              );
            })}
        </AppContext.Provider>
      </Paper>
      <Paper className="feedback__form form">
        <h2 className="form__title">Обратная связь:</h2>
        <form onSubmit={handleClickButton}>
          <TextField
            inputRef={inputName}
            className="form__fild"
            fullWidth
            name="name"
            label="Имя"
          />
          <TextField
            inputRef={inputEmail}
            className="form__fild"
            fullWidth
            name="email"
            label="Почта"
          />
          <TextField
            inputRef={inputMessage}
            className="form__fild"
            fullWidth
            name="message"
            label="Текст"
            multiline
            rows={4}
          />
          <Button type="submit" fullWidth variant="contained">
            Отправить
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default App;
