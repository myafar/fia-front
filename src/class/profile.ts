export class Profile {
    created_at: string;
    email: string;
    id: number;
    name: string;
    updated_at: string;
}

export class Authorization {
  token_type: string;
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

  export class User {
    id: number;
    name: string;
    email: string;
    created_at: string;
    updated_at: string;
    avatar: string;
    profile_facebook: string;
    id_facebook: number;
    token_facebook: string;
    gender_facebook: string;
    profile: Profesional;
}

export class Profesional {
  id: string;
  user_id: number;
  first_name: string;
  last_name: string;
  city_id: number;
  gender: string;
  description: string
  profession: string;
  address: string;
  geolocalization: string;
  image: string;
  created_at: string;
  updated_at: string;
  phone: number;
}

export class Service{


    id : number;
    name: string;
    services_type_id : number;
    description: string;
    user_id: number;
    price: string;
    created_at: string;
    updated_at: string;
    user : Profesional;
}
