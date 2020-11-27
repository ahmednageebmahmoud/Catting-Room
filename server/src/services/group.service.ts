import { groupRouter } from '../router/groups.router';
import { GroupEnum } from './../enums/group.enum';
import { IGroup } from './../interface/i.group';
export class GroupService {

    /** 
     * All Groups
     */
    static get groups(): IGroup[] {
        return [
            {
                id: GroupEnum.humor,
                name: "Humor",
                resourcesKey: "humor",
                image: "images/humor.jpeg",
            },
            {
                id: GroupEnum.science_tech,
                name: "Science & Tech",
                resourcesKey: "science_tech",
                image: "images/science-and-tech.jpg",
            },
            {
                id: GroupEnum.travel,
                name: "Travel",
                resourcesKey: "travel",
                image: "images/travel.jpg",
            },
            {
                id: GroupEnum.buy_sell,
                name: "Buy & Sell",
                resourcesKey: "buy_sell",
                image: "images/buy-and-sell.jpg",
            },
            {
                id: GroupEnum.business,
                name: "Business",
                resourcesKey: "business",
                image: "images/business.jpg",
            },
            {
                id: GroupEnum.style,
                name: "Style",
                resourcesKey: "style",
                image: "images/style.jpg",
            },
            {
                id: GroupEnum.health,
                name: "Health",
                resourcesKey: "health",
                image: "images/health.jpg",
            },
            {
                id: GroupEnum.animals,
                name: "Animals",
                resourcesKey: "animals",
                image: "images/animals.jpg",
            },
            {
                id: GroupEnum.sports_fitness,
                name: "Sports & Fitness",
                resourcesKey: "sports_fitness",
                image: "images/sports.jpg",
            },
            {
                id: GroupEnum.education,
                name: "Education",
                resourcesKey: "education",
                image: "images/education.jpeg",
            },
            {
                id: GroupEnum.arts,
                name: "Arts",
                resourcesKey: "arts",
                image: "images/arts.jpg",
            },
            {
                id: GroupEnum.animals,
                name: "Entertainment",
                resourcesKey: "Entertainment",
                image: "images/entertainment.jpg",
            },
            {
                id: GroupEnum.relationships_identity,
                name: "Relationships & Identity",
                resourcesKey: "relationships_identity",
                image: "images/relationships.jpeg",
            },
            {
                id: GroupEnum.parenting,
                name: "Parenting",
                resourcesKey: "parenting",
                image: "images/parenting.jpg",
            },
            {
                id: GroupEnum.hobbies_interests,
                name: "Hobbies & Interests",
                resourcesKey: "hobbies_interests",
                image: "images/hobbies.jpg",
            },
            {
                id: GroupEnum.food_drink,
                name: "Food & Drink",
                resourcesKey: "food_drink",
                image: "images/food-and-drink.jpg",
            },
            {
                id: GroupEnum.vehicles_commutes,
                name: "Vehicles & Commutes",
                resourcesKey: "vehicles_commutes",
                image: "images/vehicles.jpg",
            },
            {
                id: GroupEnum.civics_community,
                name: "Civics & Community",
                resourcesKey: "civics_community",
                image: "images/civics-and-community.jpg",
            },
            {
                id: GroupEnum.covid,
                name: "Covid 19",
                resourcesKey: "covid",
                image: "images/covid-19.jpg",
            }
        ];
    }

}//End Class