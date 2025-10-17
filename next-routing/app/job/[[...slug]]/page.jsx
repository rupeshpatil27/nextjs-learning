const JobRole = async (props) => {
  const { slug } = await props.params;

  if (slug?.length === 2) {
    return (
      <div className="main-container space-y-2">
        <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
          <span className="text-2xl">
            Looking for {slug[0]} with {slug[1]} role
          </span>
        </div>
      </div>
    );
  }
  
  if (slug?.length === 1) {
    return (
      <div className="main-container space-y-2">
        <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
          <span className="text-2xl">
            Looking for {slug[0]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="main-container space-y-2">
      <div className="bg-[#fcfbfb] flex justify-start gap-5 flex-col p-10 rounded-md">
        <span className="text-2xl">
          Job Role page!
        </span>
      </div>
    </div>
  );
};

export default JobRole;
