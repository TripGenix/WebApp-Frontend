import { useEffect, useRef, useState } from "react";

export default function TripSummary({
  name,
  startLocation,
  endLocation,
  startDate,
  endDate,
  waypoints,
  routeData,
}) {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    if (!routeData || !routeData.routes) return;

    const g = window.google;
    const route = routeData.routes[0];
    const legs = route.legs;

    // ===== Summary Calculation =====
    let totalDist = 0;
    let totalDur = 0;

    const legsSummary = legs.map((leg) => {
      totalDist += leg.distance.value;
      totalDur += leg.duration.value;
      return {
        start: leg.start_address,
        end: leg.end_address,
        dist: leg.distance.text,
        time: leg.duration.text,
      };
    });

    const totalKm = (totalDist / 1000).toFixed(2);
    const hrs = Math.floor(totalDur / 3600);
    const mins = Math.floor((totalDur % 3600) / 60);

    const orderedStops = route.waypoint_order.map((i) => waypoints[i]);

    setSummary({
      legsSummary,
      totalKm,
      totalTimeText: `${hrs} hrs ${mins} mins`,
      orderedStops,
    });

    // ===== Initialize Map =====
    if (!mapInstance.current) {
      mapInstance.current = new g.maps.Map(mapRef.current, {
        zoom: 8,
        center: { lat: 7.8731, lng: 80.7718 },
      });
    }

    // ===== Decode Polyline =====
    const decoded = g.maps.geometry.encoding.decodePath(
      route.overview_polyline.points
    );

    // ===== Remove previous polyline =====
    if (window.currentRouteLine) {
      window.currentRouteLine.setMap(null);
    }

    // ===== Draw new polyline =====
    window.currentRouteLine = new g.maps.Polyline({
      path: decoded,
      geodesic: true,
      strokeColor: "#007aff",
      strokeOpacity: 0.8,
      strokeWeight: 4,
    });
    window.currentRouteLine.setMap(mapInstance.current);

    // ===== Fit map bounds =====
    const bounds = new g.maps.LatLngBounds();
    decoded.forEach((p) => bounds.extend(p));
    mapInstance.current.fitBounds(bounds);

    // ===== Markers Setup =====
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // Clear old markers
    if (!window.routeMarkers) window.routeMarkers = [];
    window.routeMarkers.forEach((m) => m.setMap(null));
    window.routeMarkers = [];

    // START Marker (A - Green)
    const startMarker = new g.maps.Marker({
      map: mapInstance.current,
      position: legs[0].start_location,
      label: labels[0],
      title: startLocation,
      icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    });
    window.routeMarkers.push(startMarker);

    // WAYPOINT + END Markers
    legs.forEach((leg, i) => {
      const isEnd = i === legs.length - 1;

      const marker = new g.maps.Marker({
        map: mapInstance.current,
        position: leg.end_location,
        label: labels[i + 1],
        title: leg.end_address,
        icon: isEnd
          ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png" // END
          : "http://maps.google.com/mapfiles/ms/icons/blue-dot.png", // WAYPOINT
      });

      window.routeMarkers.push(marker);
    });
  }, [routeData]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg border p-6">
      <h1 className="text-2xl font-bold text-center">Trip Summary</h1>
      <hr className="my-3" />

      <p><b>Name:</b> {name || "___________"}</p>
      <p><b>Start Location:</b> {startLocation || "___________"}</p>
      <p><b>End Location:</b> {endLocation || "___________"}</p>
      <p><b>Start Date:</b> {startDate || "___________"}</p>
      <p><b>End Date:</b> {endDate || "___________"}</p>

      <div ref={mapRef} className="w-full h-72 rounded-lg border my-4" />

      {summary && (
        <div className="bg-gray-100 p-4 rounded-lg text-sm">
          <p className="font-semibold text-green-700">✔ Optimized Route Order:</p>

          <div className="ml-4 mt-1">
            <p>A — {startLocation}</p>
            {summary.orderedStops.map((stop, i) => (
              <p key={i}>
                {String.fromCharCode(66 + i)} — {stop}
              </p>
            ))}
            <p>
              {String.fromCharCode(66 + summary.orderedStops.length)} —{" "}
              {endLocation}
            </p>
          </div>

          <hr className="my-3" />

          <p className="font-semibold">📍 Route Details:</p>
          {summary.legsSummary.map((l, i) => (
            <div key={i} className="ml-3 mb-3">
              <p>
                {String.fromCharCode(65 + i)} →{" "}
                {String.fromCharCode(66 + i)}
              </p>
              <p>Distance: {l.dist}</p>
              <p>Duration: {l.time}</p>
            </div>
          ))}

          <p><b>Total Distance:</b> {summary.totalKm} km</p>
          <p><b>Total Time:</b> {summary.totalTimeText}</p>
        </div>
      )}
    </div>
  );
}
