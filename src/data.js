import {
  getRandomValue
} from './utils';

export const getPhoto = () => {
  return `http://picsum.photos/300/150?r=${Math.random()}`;
};

export class Store {
  constructor() {
    this._destinations = [];
    this._offers = [];
  }

  getDestinations() {
    return this._destinations;
  }

  getOffers() {
    return this._offers.map((el) => [el.type, el.offers]);
  }

  setDestinations(data) {
    this._destinations = data;
  }

  setOffers(data) {
    this._offers = data;
  }
}

export const offersList = [
  {
    name: `event-offer-luggage`,
    type: `Add luggage`,
    price: 30,
    check: Boolean(Math.round(Math.random()))
  },
  {
    name: `event-offer-comfort`,
    type: `Switch to comfort class`,
    price: 100,
    check: Boolean(Math.round(Math.random()))
  },
  {
    name: `event-offer-meal`,
    type: `Add meal`,
    price: 15,
    check: Boolean(Math.round(Math.random()))
  },
  {
    name: `event-offer-seats`,
    type: `Choose seats`,
    price: 5,
    check: Boolean(Math.round(Math.random()))
  },
  {
    name: `event-offer-train`,
    type: `Travel by train`,
    price: 40,
    check: Boolean(Math.round(Math.random()))
  }
];

export const getEvent = () => ({

  destination: [
    `Saint-Petersburg`,
    `Moscow`,
    `Minsk`,
    `Kiev`,
    `Helsinki`,
  ][Math.floor(Math.random() * 5)],

  photo: getPhoto(),

  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`. `).sort(() => 0.5 - Math.random()),

  time: {
    timeIn: Date.now() + Math.random() * 50000000,
    timeOut: (Date.now() + Math.random() * 50000000) + 50000000,
    durationHours: ``,
    durationMinutes: ``,

    getDurationHours() {
      let time = this.timeOut - this.timeIn;
      this.durationHours = Math.floor(time / 3600000);
      this.durationMinutes = Math.floor((time / 60000) - this.durationHours * 60);
      return this.durationHours;
    },

    getDurationMinutes() {
      return this.durationMinutes;
    }
  },

  offers: offersList
});

export const getMenu = () => ({
  list: [{
    name: `Table`,
    active: true
  },
  {
    name: `Stats`,
    active: false
  }
  ]
});
