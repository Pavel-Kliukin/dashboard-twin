const DashboardLayout = () => {
  return (
    <div class="p-3 flex-1 flex flex-col sm:ml-64 bg-[#F9FAFC]">
      <div className="h-1/3 w-full flex flex-1">
        <div class="m-3 flex-1 bg-white rounded-lg">01</div>
        <div class="m-3 w-60 flex bg-white rounded-lg">02</div>
      </div>
      <div className="h-1/3 w-full flex">
        <div class="m-3 w-1/2 bg-white rounded-lg">03</div>
        <div class="m-3 flex-1 bg-white rounded-lg">04</div>
        <div class="m-3 flex-1 bg-white rounded-lg">05</div>
      </div>
      <div className="h-1/3 w-full flex">
        <div class="m-3 flex-1 bg-white rounded-lg">06</div>
      </div>
    </div>
  );
};

export default DashboardLayout;