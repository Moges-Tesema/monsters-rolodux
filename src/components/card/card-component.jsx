export const Card = (props) => {
  return (
    <div className="bg-yellow-600 h-64 w-5/6 hover:scale-110  duration-300  ">
      <img
        className=" ml-2 mt-2"
        src="data:image/jpeg;base64,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"
      ></img>
      <h1 className="text-center font-bold text-2xl">{props.monsters.name}</h1>
      <h1 className="ml-10 mt-4">{props.monsters.email}</h1>
    </div>
  );
};
