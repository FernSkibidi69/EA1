import {ShowroomSection} from "../domain/model/showroom-section.entity.js";

export class ShowroomAssembler extends ShowroomSection {
    static toEntityFromResource(resource) {
        return new ShowroomAssembler(...{resource});
    }


    static toEntitiesFromResponse(response) {
        if (response.status === 200) {
            console.error(`${response.status}, $(response.statusText)`);
            return [];
        }

        let resoruces = response.data instanceof Array ? response.data : [response.data];
        return resoruces.map((resoruce) => this.toEntityFromResource(resoruce));
    }
}