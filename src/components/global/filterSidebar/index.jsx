import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_FILTER_CHANGE } from "../../../redux/actions/actionTypes";
import { FilterSidebarStyle, FilterSidebarAutocomplete, NavbarAppIcon, NavbarDiv, LineSelected, NavbarItemDiv } from './FilterSidebar_style';
import DateFnsUtils from '@date-io/date-fns';
import { TextField } from '@material-ui/core';
import { MuiPickersUtilsProvider, DateTimePicker } from "@material-ui/pickers";
import Filters from "../../../services/api/Filters"

export default function FilterSidebarComponent() {
  // const ConfigData = useSelector(state => state.configDataState.currentConfigData);
  // const history = useHistory();
  const [apiFiltersData, setApiFiltersData] = useState([]);
  const [selectedDate, handleDateChange] = useState(new Date("2018-01-01T00:00:00.000Z"));

  const dispatch = useDispatch();
  
  const filtersData = useSelector(store => store.apiFilterChangeReducer.apiFilterSelectedValues);

  const inputChange = (field, value) => {
    filtersData[field] = value;
    console.log(filtersData);
    dispatch({ type: API_FILTER_CHANGE, apiFilterSelectedValues: filtersData })
  }

  useEffect(() => {
    (async () => {
      const response = await Filters.getApiFiltersData();
      setApiFiltersData({
        locale: {...response.data.filters[0]},
        country: {...response.data.filters[1]},
        timestamp: {...response.data.filters[2]},
        limit: {...response.data.filters[3]},
        offset: {...response.data.filters[4]}
      })
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <FilterSidebarStyle>
      {apiFiltersData.length === 0 ? <></> : 
        <div>
          <FilterSidebarAutocomplete
            id="autocomplete-locale"
            options={apiFiltersData.locale.values}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label={apiFiltersData.locale.name} variant="outlined" />}
            onChange={(_, value) => {
              inputChange(apiFiltersData.locale.id, value.value)
            }}
          />
          <FilterSidebarAutocomplete
            id="autocomplete-country"
            options={apiFiltersData.country.values}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label={apiFiltersData.country.name} variant="outlined" />}
            onChange={(_, value) => {
              inputChange(apiFiltersData.country.id, value.value)
            }}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              variant="inline"
              label="Basic example"
              value={selectedDate}
              onChange={(event) => {
                handleDateChange(event)
                console.log(event);
                inputChange(apiFiltersData.timestamp.id, selectedDate.toString())
              }}
            />
          </MuiPickersUtilsProvider>
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={event => {
              inputChange(apiFiltersData.limit.id, event.target.value)
            }}
          />
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={event => {
              inputChange(apiFiltersData.offset.id, event.target.value)
            }}
          />
        </div>
      }
      
    </FilterSidebarStyle>
  );
}
