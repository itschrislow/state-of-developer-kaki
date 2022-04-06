export default function Tooltip({ color, label, value }) {
  return (
    <div className="px-[9px] py-[5px] flex items-center bg-white text-black rounded-[2px]">
      {color && (
        <div className="w-3 h-3 mr-[7px]" style={{ backgroundColor: color }} />
      )}
      <p>
        {label}: <span className="font-bold">{value}</span>
      </p>
    </div>
  );
}
