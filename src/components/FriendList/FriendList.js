import PropTypes from 'prop-types';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(item => (
        <li key={item.id} className={s.item}>
          <span className={item.isOnline ? s.statusOnline : s.statusOffline}>
            {item.isOnline}
          </span>
          <img
            className={s.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={s.name}>{item.name}</p>
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
