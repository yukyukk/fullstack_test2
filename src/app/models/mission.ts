export class Mission {
    name: string;
    launch_year: string;
    rocket_name: string;
    rocket_type: string;
    site_name: string;
    details: string;
    wikipedia: string;
    mission_patch: string;

    constructor(mission: any) {
        this.name = mission.mission_name;
        this.launch_year = mission.launch_year;
        this.rocket_name = mission.rocket.rocket_name;
        this.rocket_type = mission.rocket.rocket_type;
        this.site_name = mission.launch_site.site_name;
        this.details = mission.details;
        this.wikipedia = mission.links.wikipedia;
        this.mission_patch = mission.links.mission_patch_small;
    }
}
