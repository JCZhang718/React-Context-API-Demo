import GrandChild from './Grandchild';

const Child = () => {
  return (
    <>
      <div className="text-center mt-3">
        <h2 className="text-3xl">Child Component</h2>
        <small>Not Using the count state too</small>
      </div>

      <GrandChild/>
    </>
  );
};

export default Child;