import React from "react";
import { CargoCanvas } from './canvas'
import { Cb2Canvas } from "./canvas";
import { GunshipCanvas } from "./canvas";
import { DroiodCanvas } from "./canvas";

const Randomizer = () => {

    const isReactComponent = Math.floor(Math.random() * 4);

    if (isReactComponent == 1) {
        // Jeśli wylosowana liczba jest większa niż 0.5, zwracamy reactowy komponent
        return <CargoCanvas />;
    }
    else if (isReactComponent == 2) {

        // Jeśli wylosowana liczba jest mniejsza lub równa 0.5, zwracamy zwykły tekst
        return <Cb2Canvas />;

    }
    else if (isReactComponent == 3) {

        // Jeśli wylosowana liczba jest mniejsza lub równa 0.5, zwracamy zwykły tekst
        return <GunshipCanvas />;

    }
    else if (isReactComponent == 0) {

        // Jeśli wylosowana liczba jest mniejsza lub równa 0.5, zwracamy zwykły tekst
        return <DroiodCanvas />;

    }
}
export default Randomizer;