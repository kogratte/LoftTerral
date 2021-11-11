export interface Language {
  code: string;
  name: string;
  rtl: boolean;
}

export interface Country {
  capital: string;
  code: string;
  languages: Language[];
  name: string;
  currency: string;
}

export interface ContinentResponse {
  code: string;
  name: string;
  countries: Country[];
}

export default interface ContinentsQueryResponse {
  continents: ContinentResponse[]
};
