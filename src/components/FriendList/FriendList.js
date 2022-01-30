import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
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
