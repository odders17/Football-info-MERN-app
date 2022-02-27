export function PlayerInfo({ data }, ApiKey) {
  return (
    <div className="mx-auto border-2 p-2 m-4 bg-gray-800 shadow-xl m-2 rounded-xl">
      <span className="p-2 m-2 text-3xl text-gray-800">{data.title}:</span>
      <span>{data.info ? data.info : "TBC"}</span>
    </div>
  );
}
