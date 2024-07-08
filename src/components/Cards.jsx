import PropTypes from 'prop-types';
import Card from './Card';
const Cards = ({ users, handleRemove }) => {
  return (
    <div className="w-full min-h-96 max-h-96 overflow-auto p-4 flex gap-4 justify-center flex-wrap">
      {
        users.map((user, index) => {
          return <Card id={index} key={index} user={user} handleRemove={handleRemove}></Card>
        })
      }

    </div>
  );
};

Cards.propTypes = {
  users: PropTypes.array,
  handleRemove: PropTypes.func,
};
export default Cards;