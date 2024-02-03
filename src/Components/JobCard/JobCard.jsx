
import { FaStar } from "react-icons/fa6";
import { PieChart, Pie, Cell } from "recharts";

const JobCard = () => {
  const data = [
    {
      id: 1,
      name: "lessons read",
      points: 823,
      color: "#edf2f7",
    },
    {
      id: 2,
      name: "stars collected",
      points: 11,
      color: "#fff",
      icon: <FaStar />,
    },
    {
      id: 3,
      name: "quiz points",
      points: 560,
      color: "#38a169",
    },
    {
      id: 4,
      name: "exercise points",
      points: 148,
      color: "#f6e05e",
    },
  ];

  const totalPoints = data.reduce((acc, item) => acc + item.points, 0);

  return (
    <div className="border-2 bg-white shadow-2xl border-gray-200 rounded-2xl p-4 ">
      <div className="text-center ">
        <h5 className="font-medium ">Good Job!</h5>
        <p className="text-xs font-medium text-gray-600">Your score</p>
      </div>
      <div className="text-center">
        <div className="flex justify-center">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx={100}
              cy={100}
              innerRadius={80}
              outerRadius={90}
              startAngle={180}
              m
              endAngle={0}
              paddingAngle={2}
              dataKey="points"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </div>
        <div className="-mt-28">
          <span className="text-4xl lg:text-5xl font-bold">{totalPoints}</span>
          <p className="text-sm font-semibold">Points</p>
        </div>
      </div>
      <div>
        <h6 className="p-3 font-medium text-sm text-gray-600">Score factors</h6>
        <div className="grid grid-cols-2 gap-2">
          {data.map((item) => (
            <div
              className="border flex justify-between rounded-xl"
              key={item.id}
            >
              <div className="px-3 py-2 -space-y-1.5 font-medium">
                <div className="flex gap-1 items-center">
                  <span className="font-semibold text-lg">{item.points}</span>
                  <span>{item.icon}</span>
                </div>
                <p className="text-xs md:text-sm text-gray-500">{item.name}</p>
              </div>
              <div
                style={{ backgroundColor: item.color }}
                className={`w-2 flex rounded-r-xl justify-end`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
