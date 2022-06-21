export function DriverCard(props) {
  return (
    <div>
      {' '}
      <div>
        <ul>
          <li>{props.name};</li>
          <li>{Math.round(Number(props.rating))};</li>
          <li>
            <img style={{ width: 500 }} src={props.img} alt="#"></img>
          </li>
          <li>{props.car.model};</li>
          <li>{props.car.licensePlate};</li>
        </ul>
      </div>
    </div>
  );
}
