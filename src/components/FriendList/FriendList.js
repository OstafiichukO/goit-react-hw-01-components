import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(item => (
        <li key={item.id} className="item">
          <span className="status">{item.isOnline}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;
