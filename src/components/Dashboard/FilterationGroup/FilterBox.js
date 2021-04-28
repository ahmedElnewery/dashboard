const FilterBox = (props) => {
  return (
    <div className=" bg-primary w-48  p-5 rounded-lg">
        <span className="">Filter by</span>
        <div className="flex justify-start items-center mt-3">
          <span className="box mr-3  hover:bg-secondary transition-colors cursor-pointer	">1D</span>
          <span className="box mr-3  hover:bg-secondary transition-colors cursor-pointer	">1M</span>
          <span className="box  hover:bg-secondary transition-colors cursor-pointer	">1Y</span>
        </div>
      </div>
     
  );
};

export default FilterBox;
