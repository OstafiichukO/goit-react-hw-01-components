import PropTypes from 'prop-types';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  currency: PropTypes.string,
  amount: PropTypes.number.isRequired,
};

TransactionHistory.defaultProps = {
  type: 'Type',
  currency: 'Currency',
};

export default TransactionHistory;
