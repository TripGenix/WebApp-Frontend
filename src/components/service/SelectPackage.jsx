import { useNavigate } from "react-router-dom";

export default function PackageCard({
  Headerimage,
  Title,
  navigate,
  badge = null, // optional badge text
}) {
  const navigateTo = useNavigate();

  function handleClick() {
    navigateTo(navigate);
  }

  return (
   <div className="w-[360px] mx-auto">
  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-[420px] flex flex-col">
    
    <img
      src={Headerimage}
      alt={Title}
      className="w-full h-56 object-cover"
    />

    <div className="p-6 text-center flex flex-col flex-1 justify-between">
      
      <div>
        {badge && (
          <span className="inline-flex items-center px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-4">
            {badge}
          </span>
        )}

        <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-6">
          {Title}
        </h2>
      </div>

      <button
  onClick={handleClick}
  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition w-full"
>
  Book Now
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M9 5l7 7-7 7" />
  </svg>
</button>
    </div>
  </div>
</div>
  );
}
