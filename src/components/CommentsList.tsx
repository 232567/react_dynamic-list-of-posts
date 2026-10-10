import React from 'react';
import { Comment } from '../types/Comment';

type Props = {
  comments: Comment[];
  onDelete: (comment: Comment) => void;
};

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
