import { useSelector } from "react-redux";

const Counter = () => {
  const counterValue = useSelector((store) => store.count);

  return (
    <div>
      <p className="card-text">Counter is: {counterValue}</p>
    </div>
  );
};

export default Counter;
