const TeamMembers = ({ members, title }) => {
  return (
    members &&
    members.length > 0 && (
      <div className="flex flex-col items-center justify-center">
        <p className="text-[#C70039] italic font-bold text-lg">{title}: </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 font-[Poppins] max-w-7xl text-white ">
          {members.map((member) => (
            <div
              key={member.id}
              style={{
                background:
                  "linear-gradient(45deg, #5E66EF,#007DFA,#008AEB,#0090C7,#009198,#009067)",
              }}
              className="flex flex-col my-2 border-4 rounded-xl border-gray-900 p-4 w-[170px] h-[150px] md:w-[200px]">
              <p className="text-base md:text-lg lg:text-xl">{member.name}</p>
              <img
                src={`https://image.tmdb.org/t/p/original/${member?.profile_path}`}
                alt=""
                className="object-fill w-10 h-10 rounded-full"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
                }}
              />
              <p className="text-sm md:text-base lg:text-lg">
                <span>Department: </span> {member?.known_for_department}
              </p>
              <p className="text-sm md:text-base lg:text-lg">
                <span>Gender: </span>
                {member?.gender === 1
                  ? "Female"
                  : member?.gender === 2
                  ? "Male"
                  : "Other"}
              </p>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default TeamMembers;
