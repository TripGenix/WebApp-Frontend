import { Link, useNavigate } from "react-router-dom";

export default function PackageCard(props) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(props.navigate);
  }

  return (
    <div className="w-[360px] m-5">
      <div className="max-w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={props.Headerimage}
          alt="Card Image"
          className="w-full h-56 object-cover"
        />

        <div className="p-6 text-center">
          <span className="inline-flex items-center px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-full mb-4">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M12 2v2m6.36.64l-1.41 1.41M22 12h-2M4 12H2m4.05-5.95l1.41 1.41M12 22v-2m6.36-1.36l-1.41-1.41M3.64 17.36l1.41-1.41" />
            </svg>
            Trending
          </span>

          <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-6">
            {props.Title}
          </h2>

          <button
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
            onClick={() => handleClick()}
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
