import { Constants } from "./Constants";

export default class Task {
  private name:         string;
  private state:        Constants.State;
  private description:  string;
  private toDate:       Date;
  private priority:     Constants.Priority;

  constructor(name: string,
              state?: Constants.State,
              description?: string,
              toDate?: Date,
              priority?: Constants.Priority) {

    this.name = name;

    this.state = state || null;
    this.description = description || null;
    this.toDate = toDate || null;
    this.priority = priority || null;
  }

  /* get methods */

  public getName():string {
    return this.name;
  }

  public getState():Constants.State {
    return this.state;
  }

  public getDescription():string {
    return this.description;
  }

  public getToDate():Date {
    return this.toDate;
  }

  public getPriority():string {
    return this.priority;
  }

  /* set methods */

  public setName(name:string) {
    this.name = name;
  }

  public setState(state:Constants.State) {
    this.state = state;
  }

  public setDescription(description:string) {
    this.description = description;
  }

  public setToDate(toDate:Date) {
    this.toDate = toDate;
  }

  public setPriority(priority:Constants.Priority) {
    this.priority = priority;
  }

}
