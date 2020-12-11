"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupService = void 0;
const group_enum_1 = require("./../enums/group.enum");
class GroupService {
    /**
     * All Groups
     */
    static get groups() {
        return [
            {
                id: group_enum_1.GroupEnum.humor,
                name: "Humor",
                resourcesKey: "humor",
                image: "images/humor.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.science_tech,
                name: "Science & Tech",
                resourcesKey: "science_tech",
                image: "images/science-and-tech.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.travel,
                name: "Travel",
                resourcesKey: "travel",
                image: "images/travel.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.buy_sell,
                name: "Buy & Sell",
                resourcesKey: "buy_sell",
                image: "images/buy-and-sell.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.business,
                name: "Business",
                resourcesKey: "business",
                image: "images/business.jpg",
            },
            {
                id: group_enum_1.GroupEnum.style,
                name: "Style",
                resourcesKey: "style",
                image: "images/style.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.health,
                name: "Health",
                resourcesKey: "health",
                image: "images/health.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.animals,
                name: "Animals",
                resourcesKey: "animals",
                image: "images/animals.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.sports_fitness,
                name: "Sports & Fitness",
                resourcesKey: "sports_fitness",
                image: "images/sports.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.education,
                name: "Education",
                resourcesKey: "education",
                image: "images/education.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.arts,
                name: "Arts",
                resourcesKey: "arts",
                image: "images/arts.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.animals,
                name: "Entertainment",
                resourcesKey: "Entertainment",
                image: "images/entertainment.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.relationships_identity,
                name: "Relationships & Identity",
                resourcesKey: "relationships_identity",
                image: "images/relationships.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.parenting,
                name: "Parenting",
                resourcesKey: "parenting",
                image: "images/parenting.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.hobbies_interests,
                name: "Hobbies & Interests",
                resourcesKey: "hobbies_interests",
                image: "images/hobbies.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.food_drink,
                name: "Food & Drink",
                resourcesKey: "food_drink",
                image: "images/food-and-drink.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.vehicles_commutes,
                name: "Vehicles & Commutes",
                resourcesKey: "vehicles_commutes",
                image: "images/vehicles.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.civics_community,
                name: "Civics & Community",
                resourcesKey: "civics_community",
                image: "images/civics-and-community.jpg",
                messages: []
            },
            {
                id: group_enum_1.GroupEnum.covid,
                name: "Covid 19",
                resourcesKey: "covid",
                image: "images/covid-19.jpg",
                messages: []
            }
        ];
    }
} //End Class
exports.GroupService = GroupService;
