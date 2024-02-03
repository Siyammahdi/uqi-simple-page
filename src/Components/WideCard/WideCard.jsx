const WideCard = () => {
  return (
    <div className="border rounded-2xl p-10 my-28 ">
      <div className="lg:w-1/2 space-y-5">
        <h2 className="text-2xl">Hi,</h2>
        <p className="text-sm lg:text-base text-gray-600">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
          odio aliquam et explicabo dolore quisquam impedit cum! Quis, odio
          culpa?
        </p>
        <p className="text-sm lg:text-base text-gray-600">Lorem ipsum dolor sit amet.</p>
        <div className="flex gap-6 font-medium text-sm lg:text-base">
            <button className="rounded-full py-2 bg-gray-800  text-white w-full">Continue</button>
            <button className="rounded-full  lg:py-2 w-full">Brouse Tutorials</button>
        </div>
      </div>
    </div>
  );
};

export default WideCard;
