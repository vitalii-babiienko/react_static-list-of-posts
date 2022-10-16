import React from 'react';
import { Comment } from '../../types/Comment';
import { CommentInfo } from '../CommentInfo';

type Props = {
  comments: Comment[];
};

export const CommentList: React.FC<Props> = ({ comments }) => (
  comments.length
    ? (
      <ul className="CommentList">
        {comments.map(comment => (
          <li key={comment.id}>
            <CommentInfo comment={comment} />
          </li>
        ))}
      </ul>
    )
    : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )
);
