import PropTypes from 'prop-types';
const Form = ({ addUser }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const image = event.target.image.value;
    // console.log(name, email, image);
    const info = { name, email, image };
    console.log(info);
    addUser(info);
  }



  return (
    <div className="mt-10 flex justify-center">
      <form className="flex gap-10" onSubmit={handleSubmit}>
        <input className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="name" name="name" />
        <input className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="email" name="email" />
        <input className="rounded-md px-2 py-1 text-base font-semibold outline-none" type="text" placeholder="image" name="image" />
        <input className="rounded-md px-5 py-1 bg-blue-500 text-white font-semibold" type="submit" />
      </form>
    </div>
  );
};
Form.propTypes = {
  addUser: PropTypes.func,
};
export default Form;