import { data } from "autoprefixer";

const Item = ({ task }) => {};

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-[90vh]">
      {data.map((index, i) => {
        return <Item data={i} />;
      })}
    </div>
  );
};

export default HomePage;
