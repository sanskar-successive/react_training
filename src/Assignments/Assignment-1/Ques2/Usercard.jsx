import "./Usercard.css";

const Usercard = ({ name, email, avatarURL }) => {
  return (
    <>
      <div className="card">
        <div className="container">
          <img
            src={avatarURL}
            alt="avatarURL"
            style={{ height: "20rem", width: "10rem" }}
          />
          <h4>
            <b>{name}</b>
          </h4>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
};
export default Usercard;
