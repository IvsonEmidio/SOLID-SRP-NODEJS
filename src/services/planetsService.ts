import planetsData from "../data/planetsData";

/**
 * Contains all business logic. 
 */
export default class PlanetsService {
  private data: {
    id: number;
    name: string;
    diameter: number;
    distance_from_sun: number;
  }[];

  constructor() {
    this.data = planetsData;
  }

  /**
   * Find an planet by id.
   * @param {number} id
   * @returns {object|string}
   */
  protected findByID(id: number): object | string {
    let planet = this.data.find((item) => item.id === id);

    if (planet) {
      return planet;
    }
    return 'Planet not found';
  }


  /**
   * Find an planet by distance from sun.
   * @param {number} sunDistance 
   * @returns {object|string}
   */
  protected findBySunDistance(sunDistance: number): object | string{
    let planet = this.data.find((item) => item.distance_from_sun === sunDistance);
    if (planet){
      return planet;
    }
    
    return 'Planet not found';
  }
}
