import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {ShowRoomApi} from "../infrastructure/showroom-api.js";
import {ShowroomAssembler} from "../infrastructure/showroom-assembler.js";
import {vehicleAssembler} from "../infrastructure/showroom-assembler.js";
import {ShowroomSection} from "../domain/model/showroom-section.entity.js";
import {VehicleSection} from "../domain/model/vehicle-section.entity.js";

const showRoomApi = new ShowRoomApi();

const useshowRoomStore = defineStore('ShowRoomStore', () => {
    const showroom = ref([]);
    const vehicle = ref([]);
    const errors = ref([]);
    const showroomLoaded = ref(false);
    const vehicleLoaded = ref(false);

    function fetchShowroom() {
        showRoomApi.getShowRoom().then((response) => {
            showroom.value = ShowroomAssembler.toEntitiesFromResponse(response);
            showroomLoaded.value = true;
            console.log(showroomLoaded.value);
            console.log(showroom.value);
        }).catch(error => {
            errors.value.push(error);
        });


    }

    function fetchVehicles() {
        showRoomApi.getShowRoom().then((response) => {
            showroom.value = VehicleAssembler.toEntitiesFromResponse(response);
            showroomLoaded.value = true;
            console.log(showroomLoaded.value);
            console.log(showroom.value);
        }).catch(error => {
            errors.value.push(error);
        });
    }
})