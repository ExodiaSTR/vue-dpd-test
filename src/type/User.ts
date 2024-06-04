export interface User {
  picture: {
    large: string
    medium: string
    thumbnail: string
  }
  name: {
    first: string
    last: string
    title: string
  }
  gender: string
  location: {
    city: string
    coordinates: {
      latitude: string
      longitude: string
    }
    country: string
    postcode: number
  }
  dob: {
    age: number
    date: string
  }
  email: string
  phone: string
  id: {
    name: string
    value: string
  }
}
