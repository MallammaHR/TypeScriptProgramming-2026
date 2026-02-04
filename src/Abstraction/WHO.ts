import { Admin } from "./Admin";

export interface WHO extends Admin
{
    covidVaccine():void;
}