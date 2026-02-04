import { MaxHospital } from "./MaxHospital";

let mh=new MaxHospital();
mh.physio();
mh.cardio();
mh.dental();
mh.ent();
mh.gastro();
mh.oncology();
mh.pedia();
mh.emergency();
mh.research();
mh.covidVaccine();
mh.publishMedicalNews();
mh.billing();
console.log(mh.min_fee);