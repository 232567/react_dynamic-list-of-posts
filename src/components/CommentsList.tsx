import { client } from '../utils/fetchClient';
import { Comment, CommentData } from '../types/Comment';

export const getPostComments = (postId: number) =>
  client.get<Comment[]>(`/comments?postId=${postId}`);

export const createComment = (postId: number, data: CommentData) =>
  client.post<Comment>('/comments', { ...data, postId });

export const deleteComment = (commentId: number) =>
  client.delete(`/comments/${commentId}`);

export const CommentsList: React.FC<Props> = ({ comments, onDelete }) => (
  <>
    <p className="title is-4">Comments:</p>

    {comments.map(comment => (
      <article key={comment.id} className="message is-small" data-cy="Comment">
        <div className="message-header">
          <a href={`mailto:${comment.email}`} data-cy="CommentAuthor">
            {comment.name}
          </a>

          <button
            data-cy="CommentDelete"
            type="button"
            className="delete is-small"
            aria-label="Delete comment"
            onClick={() => onDelete(comment)}
          />
        </div>

        <div className="message-body" data-cy="CommentBody">
          {comment.body}
        </div>
      </article>
    ))}
  </>
);
