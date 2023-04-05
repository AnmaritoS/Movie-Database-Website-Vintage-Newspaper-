function HeaderTitleTop() {
  return (
    <div className="relative">
      <div className="flex items-center justify-center gap-x-2 py-2 text-[#4E3C16] ">
        <div className="border-[#6c5d3e] border-l-0 border-r-0 border-[2px] bg-[#E2CCB1] py-2 w-1/6 mt-10">
          <div className="py-2 bg-[#E2CCB1] border-[#6c5d3e] w-1/2 left-1/2 right-0 border-2 border-l-0 border-r-0 relative headerTitleLeftSide " />
        </div>
        <div
          id="headerContent"
          className="flex items-center justify-center h-[80px] border-t-0 border-[#6c5d3e] border-dashed  "
        >
          <div className="text-6xl ">MOVIGO</div>
        </div>
        <div className="border-[#6c5d3e] border-l-0 border-r-0 border-[2px] bg-[#E2CCB1] py-2 w-1/6 mt-10">
          <div className="py-2 bg-[#E2CCB1] border-[#6c5d3e] w-1/2 right-1/2 left-0 border-2 border-l-0 border-r-0 relative headerTitleRightSide  " />
        </div>
        <div className="absolute right-10 -top-7 text-5xl">
          <div className="flex items-center justify-center">
            2<span className="text-4xl mb-10 font-['Playfair']">&#162;</span>
            <span className="text-xl mb-4 pl-1 underline decoration-double decoration-1">
              Each
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTitleTop;