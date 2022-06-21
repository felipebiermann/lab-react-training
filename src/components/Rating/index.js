export function Rating(props) {
  const ratingNumber = Math.round(Number(props.children));

  let stars = '';

  if (ratingNumber === 0) {
    stars = '☆☆☆☆☆';
  }

  if (ratingNumber === 1) {
    stars = '★☆☆☆☆';
  }

  if (ratingNumber === 2) {
    stars = '★★☆☆☆';
  }

  if (ratingNumber === 3) {
    stars = '★★★☆☆';
  }

  if (ratingNumber === 4) {
    stars = '★★★★☆';
  }

  if (ratingNumber === 5) {
    stars = '★★★★★';
  }

  return <p>{stars}</p>;
}
