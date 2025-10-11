export interface TourCard {
    id:number;
    imageUrl:string;
    name:string;
    description:string;
    price:number;
    durationDays:number;
    peopleNumber:number;
}

export interface TourCard2 {
  category: string;
  title: string;
  description: string;
  duration: number;
  price: string;
  image: string;
  cta: string;
}