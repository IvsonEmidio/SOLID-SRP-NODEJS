import PlanetsService from "../services/planetsService";

export default class PlanetsController extends PlanetsService {
  
  public get(id: number){
    return this.findByID(id); 
  }
}
