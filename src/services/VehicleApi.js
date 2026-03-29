import axios from "axios";

const API_BASE = "http://localhost:8080"; 

const VehicleApi = {
  getVehicles: () =>
    axios.get(`${API_BASE}/webRequestController/api/v1/getvehicles`),

  getVehicleDetails: (id) =>
    axios.get(`${API_BASE}/vehicleController/api/v1/detailsOfVehicle/${id}`),

  getCategories: () =>
    axios.get(`${API_BASE}/categoryController/api/v1`),

};

export default VehicleApi;
