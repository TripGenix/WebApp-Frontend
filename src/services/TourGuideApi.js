import axios from "axios";

const BASE_URL = "http://localhost:8089/api/v1";

const TourGuideApi = {
    getAllGuides: async () => {
        return await axios.get(`${BASE_URL}/getAll`);
    },
};

export default TourGuideApi;
