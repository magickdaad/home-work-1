import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/CloseOutlined';
import { AppContext } from '../context';

const Review = ({ name, message, index }) => {
  const { deleteComment } = React.useContext(AppContext);
  return (
    <div className="review">
      <Avatar className="review__avatar">A</Avatar>
      <div className="review__content">
        <h3 className="review__name">{name}</h3>
        <p className="review__text">{message}</p>
      </div>
      <IconButton onClick={() => deleteComment(index)} className="review__close">
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default Review;
