import { FC } from 'react';

export interface FourStarRatingOwnProps {
  className?: string;
}
export const FourStarRating: FC<FourStarRatingOwnProps> = ({ className }) => {
  return (
    <span className={className}>
      <i className="bi bi-star-fill text-warning-emphasis"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star-fill text-warning-emphasis ms-1"></i>
      <i className="bi bi-star text-warning-emphasis ms-1"></i>
    </span>
  );
};

FourStarRating.displayName = 'FourStarRating';
