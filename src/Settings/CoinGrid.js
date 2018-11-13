import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from "../App/AppProvider";
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

const getCoinsToDisplay = (coinList, topSection, favorites) => {
  return topSection ? favorites : Object.keys(coinList).slice(0, 100);
};

export default function({topSection}) {
  return (
    <AppContext.Consumer>
      {
        ({ coinList, favorites }) => (
          <CoinGridStyled>
            {getCoinsToDisplay( coinList, topSection, favorites ).map( coinKey =>
              <CoinTile
                key={coinKey}
                coinKey={coinKey}
                topSection={topSection}>
                {coinKey}
              </CoinTile> )}
          </CoinGridStyled>
        )
      }
    </AppContext.Consumer>
  );
}