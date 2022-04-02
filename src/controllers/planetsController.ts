import PlanetsService from "../services/planetsService";

/**
 * Control received requests and call correct services.
 */
export default class PlanetsController extends PlanetsService {
  
  public get(id: number){
    return this.findByID(id); 
  }
}
