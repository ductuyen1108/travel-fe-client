// Interface Tour
export interface IParamTour {
  page: number;
  limit: number;
}

export interface ITour {
  title: string;
  thumbnail: string;
  country: ICountry;
  details: ITourDetails;
  reviews: ITourReviews;
}

export interface ICountry {
  id: number;
  name: string;
}

export interface ITourDetails {
  schedule: ITourSchedule;
  content: string;
  information: ITourInformation;
}

export interface ITourSchedule {
  numberOfDays: number;
  ageLimit: number;
  suitablemonth: string;
  peoplesLimit: number;
}

export interface ITourInformation {
  price: number;
  departure: string;
  departureTime: string;
  returnTime: string;
  map: string;
}

export interface ITourReviews {
  totalReviews: number;
  reviewItem: ITourReviewsItem;
}

export interface ITourReviewsItem {
  accomodation: number;
  destination: number;
  meals: number;
  transport: number;
  valueForMoney: number;
  overall: number;
}
