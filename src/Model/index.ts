export interface GeneralResponse {
  status: string;
}

export interface SearchData {
  id: number;
  dateCreated: string;
  token: string;
  name: string;
  street: string;
  streetNo: string;
  zip: string;
  city: string;
  country: string;
  province: string;
  shortUrl: string;
  streetAndNo: string;
}

export interface SearchDataById {
  listingId: string;
  listingUrl: string;
  syncStatus: string;
  claimStatus: string;
  dateCreated: string;
  directoryType: string;
  country: string;
  name: string;
  nameStatus: string;
  street: string;
  streetStatus: string;
  streetNo: string;
  streetNoStatus: string;
  zip: string;
  zipStatus: string;
  city: string;
  cityStatus: string;
  province: string;
  provinceStatus: string;
  phone: string;
  phoneStatus: string;
  website: string;
  websiteStatus: string;
  descriptionShort: string;
  descriptionShortStatus: string;
  openingHours: Array<{
    dayOfWeek: number;
    from1: string;
    to1: string;
  }>;
  openingHoursStatus: string,
  categories: Array<{
    id: number;
    name: string;
    fullName: string;
    selectable: boolean;
  }>,
  categoriesStatus: string;
  photos: string[];
  photosStatus: string;
  lat: number;
  latStatus: string;
  lng: number;
  lngStatus: string;
  specialOpeningHours: string[];
  specialOpeningHoursStatus: string;
  streetAndNo: string;
  streetAndNoStatus: string;
  rating: number;
  countryStatus: string;
  descriptionLongStatus: string;
  attributesStatus: string;
  keywordsStatus: string;
  servicesStatus: string;
  emailStatus: string;
  streetTypeStatus: string;
  addressExtraStatus: string;
  addressDisplayStatus: string;
  faxStatus: string;
  cellphoneStatus: string;
  websiteExtraStatus: string;
  imprintStatus: string;
  openingHoursNotesStatus: string;
  legalIdentStatus: string;
  taxNumberStatus: string;
  socialPostStatus: string;
  contentListsStatus: string;
  videosStatus: string;
  socialProfilesStatus: string;
  brandsStatus: string;
  languagesStatus: string;
  paymentOptionsStatus: string;
  attributionStatus: string;
  isPublishedStatus: string;
  serviceAreasStatus: string;
}

export interface SearchDataResponse extends GeneralResponse {
  response: {
    searchData: SearchData
  };
}

export interface SearchDataByIdResponse extends GeneralResponse {
  response: {
    result: SearchDataById;
    alreadyManaged: boolean;
    managedLocation: any;
  };
}

export interface SearchDataParam {
  name: string;
  street: string;
  country: string;
  zip: string;
}
