export function PlayerInfo({ data }) {
    return (
        <div className="border-2 border-black m-2 rounded-xl">
            <span className="m-2 text-3xl text-gray-600">
                {data.title}:
            </span>
            <span>
                {data.info ? data.info : "TBC"}
            </span>
        </div>)
}