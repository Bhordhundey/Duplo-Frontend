import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import PageLayout from '../../components/shared/PageLayout';
import CustomInput from '../../components/ui/CustomInput/CustomInput';
import { enterHandler } from '../../utils/globalUtils';

export const Search = () => {

    const history = useHistory()
    const [search,setsearch] = useState("")

    const handleSearch = () => {
        history.push(`${search}`)
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setsearch(e.target?.value)
    }
    useEffect(() => {
        enterHandler("nameSearch");
      },[]);
  return (
    <div>
        <PageLayout>
      <Grid container >
          <Grid item md={12}>
          <CustomInput
          labelText='Username'
          handleClick={handleSearch} handleChange={handleChange} id="nameSearch" placeholder="Search github by username" name={'searchRepo'} />

          </Grid>
      </Grid>
      </PageLayout>
    </div>
  );
};
