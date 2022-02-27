export function PlayerInfo({ data }, ApiKey) {
  return (
    <div className="mx-auto border-2 p-2 m-4 bg-gray-800 shadow-xl m-2 rounded-xl">
      <span className="p-2 m-2 text-xl md:text-3xl text-white">{data.title}:</span><br />
      <span className="mx-auto p-2 m-2 text-xl md:text-3xl text-black">{data.info ? data.info : "TBC"}</span>
    </div>
  );
}
