import React from 'react';
import { Button } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../pages/Home';
export const FullArticle = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === Number(id));
  // const navigate = useNavigate();
  // React.useEffect(() => {
  //   setTimeout(() => {
  //     navigate('/');
  //   }, 3000);
  // }, []);

  if (!post) {
    return <h1>Статья не найдена</h1>;
  }

  return (
    <div className="full-post">
      <h1>{post.title}</h1>
      <img src={post.imageUrl} alt="Article" />
      <p>{post.text}</p>
      <Link to="/">
        <Button>Назад</Button>
      </Link>
    </div>
  );
};
