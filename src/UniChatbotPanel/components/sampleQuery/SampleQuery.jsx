import MessageIcon from "@mui/icons-material/Message";
function SampleQuery() {
  return (
    <div className="flex flex-row gap-3 bg-[#f0faf9] rounded-2xl p-3">
      <div className="bg-white rounded-full  h-10 w-20 flex justify-center items-center">
        <MessageIcon sx={{ fontSize: "20px" }} />
      </div>

      <p className="text-black ">
        "Give me a list of computer Science Universities that have merit higher
        than 40%".
      </p>
    </div>
  );
}

export default SampleQuery;
