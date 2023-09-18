
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  return (
    <section className={classes.comments}>
      <NewComment onAddComment='' />
    </section>
  );
}

export default Comments;
