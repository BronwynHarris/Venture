import { SET_MONUMENTS, SET_PHOTOS } from '../constants/monument';

const api = (monuments = 'monuments') => `https://api.myjson.com/bins/m9ofw`;

const req = (url: string, method = 'GET', body?: any) => new Request(url, {
  method,
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8'
  }),
  body
});

const selectedFields = [
  'id',
  'latitude',
  'longitude',
  'site',
  'image_url',
  'category',
  'states',
  'date_inscribed',
  'flights'
];

const buildMonumentsUrl = () => (
  `${api()}?select=${selectedFields.join(',')}` //tslint:disable-line
);

//ACTION CREATORS

const setMonuments = (data: any) => ({
  type: SET_MONUMENTS,
  payload: data
});

const setPhotos = (data: any, id: string) => ({
  type: SET_PHOTOS,
  payload: data,
  id
});

//THUNKS

export const getMonuments = () => (dispatch: any) => (
  fetch(req(buildMonumentsUrl()))
    .then(res => res.json())
    .then((data) => dispatch(setMonuments(data)))
);

export const fetchMonument = (id: string) => (dispatch: any) => (
  Promise.all([
    fetch(req(`${api()}?id=eq.${id}`)).then(res => res.json()),
    fetch(req(`${api('pictures')}?monument_id=eq.${id}`)).then(res => res.json())
  ]).then(([ monument, photos ]: any) => {
    dispatch(setMonuments(monument));
    dispatch(setPhotos(photos, id));
  })
);
