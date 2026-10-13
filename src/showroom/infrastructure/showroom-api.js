import {baseApi} from "../../shared/infrastructure/base-api.js"
import {BaseEndPoint} from "../../shared/infrastructure/base-endpoint.js"

const showroomEndpointPath =  import.meta.env.VITE_SHOW_ENDPOINT_PATH;
const vehicleEndPointPath = import.meta.env.VITE_VEHICLE_ENDPOINT_PATH;

export class  ShowRoomApi extends BaseApi {
    constructor() {
        super();
        this.#showroomEndPoint = new BaseEndPoint(this, showroomEndpointPath);
        this.#vehicleinventoryEndPoint = new BaseEndPoint(this, vehicleEndPointPath);

    }

    getShowRoom() {
        return this.#showroomEndPoint.getAll();
    }

    getShowRoomById(id) {
        return this.#showroomEndPoint.getById(id);
    }
    
    createShowRoom() {
        return this
    }
}