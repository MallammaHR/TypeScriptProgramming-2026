import { UNHC } from "./UNHC";
import { WHO } from "./WHO";

export interface USMedical extends WHO,UNHC{

    physio():void;
    cardio():void;//by default methods are abstract and does not have method body
    emergency():void;
}