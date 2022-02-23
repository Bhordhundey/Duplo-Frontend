import { useLazyQuery } from '@apollo/client';
import { Box, Grid, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Skeleton } from '@material-ui/lab';
import norecordicon from 'assets/svg/norecordicon.svg';
import PageLayout from 'components/shared/PageLayout';
import RepositoryItem from 'components/shared/RepositoryItem';
import UserDetails from 'components/shared/UserDetails';
import CustomInput from 'components/ui/CustomInput/CustomInput';
import { Space } from 'components/ui/Space/Space';
import { GET_USER_DETAILS } from 'graphql/services/user';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { globalStyles } from 'styles/globalStyles';
import homeStyles from 'styles/homeStyles';
import { INode, IUserResponse } from 'types/user';
import { useDebounce } from 'use-debounce';
const Home = () => {
  const classes = homeStyles();
  const globalClasses = globalStyles();
  const [getUserDetails, { loading: loadingUserDetails, data: userDetails, error }] =
    useLazyQuery<IUserResponse>(GET_USER_DETAILS);
  const history = useHistory();
  const [searchKeyword, setsearchKeyword] = useState<string>();
  const [searchDataKeyword] = useDebounce(searchKeyword, 700);
  const [userName, setUserName] = useState('');
  const [repositories, setrepositories] = useState<INode[]>();

  const makeCall = () => {
    const userName = history.location.pathname.replace('/', '') as string;
    if (userName) {
      setUserName(userName.trim());

      getUserDetails({
        variables: {
          login: userName.trim()
        }
      });
    }
  };
  useEffect(() => {
    makeCall();
  }, [history]);

  useEffect(() => {
    if (userDetails && userDetails.user && userDetails.user.repositories.nodes) {
      setrepositories(userDetails.user.repositories.nodes);
    }
  }, [userDetails]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchKeyword(e.target.value);
  };

  useEffect(() => {
    // the search keyword has been changed...
    if (searchDataKeyword || searchDataKeyword === '') {
      if (repositories) {
        const result =
          userDetails &&
          userDetails.user &&
          userDetails.user.repositories.nodes.filter((o) => o.name.includes(searchDataKeyword));
        setrepositories(result);
      }
    } else {
    }
    if (searchKeyword === '') {
      makeCall();
    }
  }, [searchDataKeyword, searchKeyword]);

  return (
    <PageLayout>
      <Grid container spacing={1} className={classes.authRoot}>
        <Grid item md={4} xs={12}>
          <Avatar alt="Adetunji Bodunde" src={userDetails?.user.avatarUrl} className={globalClasses.avatarLarge} />

          <Space top={20} />
          <h1>{userDetails?.user.name}</h1>
          <Typography className="userName">
            <h4>{userName}</h4>
          </Typography>

          <UserDetails userName={userName} user={userDetails?.user} />
        </Grid>

        <Grid item md={8} xs={12}>
          <div>
            <CustomInput placeholder="" name={'searchRepo'} handleChange={(e) => handleSearchInputChange(e)} />
          </div>
          {!loadingUserDetails &&
            userDetails &&
            userDetails.user &&
            userDetails.user.repositories &&
            repositories &&
            repositories.map((item, index) => <RepositoryItem item={item} key={index} />)}

          {!loadingUserDetails &&
            userDetails &&
            userDetails.user &&
            userDetails.user.repositories &&
            repositories &&
            repositories.length === 0 && (
              <div className="mt-3 ms-4 text-center">
                <img alt="No Data found" src={norecordicon} />
                <p className="text-muted mt-3 text-center">No repositories found</p>
              </div>
            )}
          {loadingUserDetails &&
            Array.from(new Array(3)).map((item) => (
              <div key={item}>
                <Space top={0.8} />
                <Box >
                  <Skeleton width="10%" height={15} />
                </Box>
                <Box>
                  <Skeleton width="15%" height={15} />
                </Box>
                <Space top={10} />
                <Box>
                  <Space top={10} />
                  <Grid container>
                    <Grid item md={6}>
                      <Grid container>
                        <Grid item md={2}>
                          <Skeleton width="90%" height={15} />
                          <Space top={20} />
                        </Grid>
                        <Grid item md={2}>
                          <Skeleton width="90%" height={15} />
                        </Grid>
                        <Grid item md={2}>
                          <Skeleton width="90%" height={15} />
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
                <Space top={15} />
                <Skeleton width="100%" height={10} />
                <Space top={15} />
              </div>
            ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export default Home;
