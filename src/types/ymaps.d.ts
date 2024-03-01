declare module 'ymaps' {
  export function ready():  Promise;
  export function load():   Promise;
  
  class Promise {
    catch(callback: Function): Promise
    then(onFulfilled?: Function, onRejected?: Function, onProgress?: Function, ctx?: any): Promise;
  }

  export class Map {
    constructor(element: string | any, state: MapState);
  }

  export class MapState {
    center: number[];
    controls: string[];
    zoom: number;
  }
}
