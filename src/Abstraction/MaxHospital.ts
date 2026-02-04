import { IndaMedical } from "./IndiaMedical";
import { Medical } from "./Medical";
import { UKMedical } from "./UKMedical";
import { USMedical } from "./USMedical";

export class MaxHospital extends Medical implements UKMedical,USMedical,IndaMedical{
    min_fee: number=100;
   //admin
    billing(): void {
          console.log('max....billing');
    }
    //UNHC
    publishMedicalNews(): void {
         console.log('max....publishMedicalNews');
    }
    //who
    covidVaccine(): void {
         console.log('max....covidvacine');
    }
    emergency(): void {
         console.log('max....emeregncy');
    }
    //UK
    dental(): void {
       console.log('max....dental');
    }
    oncology(): void {
      console.log('max....oncology');
    }
    pedia(): void {
       console.log('max....pedia');
    }
    //US
    physio(): void {
       console.log('max....physio');
    }
    cardio(): void {
       console.log('max....cardio');
    }
    //India
    gastro(): void {
        console.log('max....gasto');
    }
    ent(): void {
       console.log('max....ent');
    }

    //medical
    override research(): void {
        console.log('max--researc');
    }
    
    
}