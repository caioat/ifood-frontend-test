import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Spotify from "../../../services/api/Spotify"
import { MainStyle } from "./Main_style";

export default function MainComponent() {

    const newValue = useSelector(store => store.apiFilterChangeReducer);
    console.log(newValue);

    console.log( window.location.hash.substring(1).split('&'));

    useEffect(() => {
        (async () => {
          const urlParams = window.location.hash.substring(1).split('&');
          const params = urlParams.reduce((paramsObj, param) => {
            const auxObj = paramsObj;

            const splittedParam = param.split('=');
            console.log(splittedParam);
            auxObj[splittedParam[0]] = splittedParam[1];

            return auxObj;
          },[]);

          await Spotify.getFeaturedPlaylists(params.access_token)
        })();
        // eslint-disable-next-line
    }, [, newValue]);

    return <MainStyle>
        {newValue.apiFilterSelectedValues ? newValue.apiFilterSelectedValues.locale : ''}
        {newValue.apiFilterSelectedValues ? newValue.apiFilterSelectedValues.country : ''}
        {newValue.apiFilterSelectedValues ? newValue.apiFilterSelectedValues.timestamp : ''}
        {newValue.apiFilterSelectedValues ? newValue.apiFilterSelectedValues.limit : ''}
        {newValue.apiFilterSelectedValues ? newValue.apiFilterSelectedValues.offset : ''}
    </MainStyle>
}