export interface Location {
  name: string;
  slug: string;
  county: string;
  state: string;
  zip_codes: string[];
  region: string;
  population_approx: number;
  neighborhoods: string[];
  landmarks: string[];
  housing_types: string[];
  housing_era: string;
  local_character: string;
  unique_details: string[];
  commute_context: string;
  service_note: string;
}
