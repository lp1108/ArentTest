import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// material-ui
import { Divider, Grid, Typography } from '@mui/material';
// project imports
import AuthWrapper from '../AuthWrapper';
import AuthCardWrapper from '../AuthCardWrapper';
import AuthLogin from '../auth-forms/AuthLogin';

// assets

// ================================|| AUTH3 - LOGIN ||================================ //

const Login = () => {

    return (
        <AuthWrapper style={{ backgroundColor: '#6e6d7c' }}>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12} >
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <AuthCardWrapper>
                                <Grid container spacing={7} alignItems="center" justifyContent="center">
                                    <Grid item xs={12}>
                                        <AuthLogin />
                                    </Grid>
                                </Grid>
                            </AuthCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
                    {/* <AuthFooter /> */}
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Login;
