import React from 'react';
import { AppContext } from "../App/AppProvider";
import { SelectableTile, DeletablTile, DisableTile } from "../Shared/Tile";
import CoinHeaderGrid from "./CoinHeaderGrid";
import CoinImage from '../Shared/CoinImage';

export default function({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[ coinKey ];
        let TileClass = SelectableTile;
        if ( topSection ) {
          TileClass = DeletablTile;
        }
        return <TileClass>
          <CoinHeaderGrid topSection={topSection} name={coin.CoinName} symbol={coin.Symbol}/>
          <CoinImage coin={coin}/>
        </TileClass>
      }}

    </AppContext.Consumer>
  );
}