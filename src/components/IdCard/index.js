export function IdCard(props) {
  return (
    <>
      <ul>
        <div className="pic">
          <img src={props.picture} alt="#"></img>

          <li>
            <strong>First Name:</strong>
            {props.firstName}
          </li>
          <li>
            <strong>Last Name:</strong>
            {props.lastName}
          </li>
          <li>
            <strong>Gender:</strong>
            {props.gender}
          </li>
          <li>
            <strong>Height:</strong>
            {props.height}
          </li>
          <li>
            <strong>Birth:</strong>
            {props.birth.toDateString()}
          </li>
        </div>
      </ul>
    </>
  );
}
