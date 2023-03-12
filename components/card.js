export default function Card(props) {
  const change = props.change.toFixed(2);
  return (
    <div className="flex flex-col bg-black p-4 rounded-xl">
      <div className="flex justify-between text-base text-yellow">
        <p>{props.title}</p>
      </div>
      <div>
        <img className="mx-auto h-20" src={props.imgURL} alt={props.alt} />
        <p className="mx-auto text-center text-5xl font-semibold my-4">
          <span className="text-3xl">{props.sign}</span>
          {props.price}
        </p>
        <p
          className={
            change >= 0
              ? "flex w-20 rounded-lg justify-center items-center mx-auto text-center bg-green-600"
              : "flex w-20 rounded-lg justify-center items-center mx-auto text-center bg-red-600"
          }
        >
          {change}
        </p>
      </div>
    </div>
  );
}
