import { FC } from 'react';

export interface ThreeStarRatingOwnProps {
  className?: string;
}
export const ThreeStarRating: FC<ThreeStarRatingOwnProps> = ({ className }) => {
  return (
    <span className={className}>
      <i className="bi bi-star-fill text-warning-emphasis"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star text-warning-emphasis ms-1"></i>
      <i className="bi bi-star text-warning-emphasis ms-1"></i>
    </span>
  );
};

ThreeStarRating.displayName = 'ThreeStarRating';
