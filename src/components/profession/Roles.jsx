const Roles = ({ role }) => {
  return (
    <div className="p-5 sm:p-7 bg-white border border-slate-100 h-auto shadow-gray-200 rounded-xl">
      <div className="flex flex-col gap-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-50 center">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d={role?.iconPath} />
          </svg>
        </div>
        <p className="text-lg sm:text-xl font-semibold text-gray-900">
          {role?.title}
        </p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-600">
          {role?.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {role?.chips?.map((chip) => (
            <span
              key={chip}
              className="text-[11px] sm:text-[12px] px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roles;
