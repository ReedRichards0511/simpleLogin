
import React, { useState } from 'react';
import {
    Container,
    Box,
    TextField,
    Typography,
    Avatar,
    Grid,
    Link,
    Card,
    CardContent,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Formik, Form, Field } from 'formik';
import { LoginSchema } from '../schemas';
import { useLogin } from '../../application/hooks';
import { AlertDialog, ButtonComponent } from '../components';


export const LoginPage: React.FC = () => {

    const [openErrorModal, setOpenErrorModal] = useState(false);
    const [openSuccessModal, setOpenSuccessModal] = useState(false);

    const { loginUser, isErrorLogin, isLoadingLogin } = useLogin();

    const handleSubmit = async(values: { username: string; password: string }) => {
        console.log(values);
        try {
            await loginUser({ username: values.username, password: values.password });
            setOpenSuccessModal(true);
        } catch (error) {
            handleOpenAlert();
        }
    };

    const handleOpenAlert = () => {
        setOpenErrorModal(true);
    };

    const handleCloseAlert = () => {
        setOpenErrorModal(false);
    };

 


    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Card sx={{ width: '100%', mt: 3, p: 2, boxShadow: 3 }}>
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Iniciar Sesión
                            </Typography>
                            <Formik
                                initialValues={{ username: '', password: '' }}
                                validationSchema={LoginSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form>
                                        <Box sx={{ mt: 1 }}>
                                            <Field
                                                as={TextField}
                                                margin="normal"
                                                fullWidth
                                                id="username"
                                                label="Nombre de Usuario"
                                                name="username"
                                                autoComplete="username"
                                                autoFocus
                                                error={touched.username && Boolean(errors.username)}
                                                helperText={touched.username && errors.username}
                                            />
                                            <Field
                                                as={TextField}
                                                margin="normal"
                                                fullWidth
                                                name="password"
                                                label="Contraseña"
                                                type="password"
                                                id="password"
                                                autoComplete="current-password"
                                                error={touched.password && Boolean(errors.password)}
                                                helperText={touched.password && errors.password}
                                            />
                                            <ButtonComponent 
                                            text={isLoadingLogin ? 'Cargando...' : 'Iniciar Sesión'}
                                            type="submit" 
                                            />
                                            <Grid container>
                                                <Grid item xs>
                                                    <Link onClick={() => {}} variant="body2">
                                                        ¿Olvidaste tu contraseña?
                                                    </Link>
                                                </Grid>
                                                <Grid item>
                                                    <Link onClick={() => {}} variant="body2">
                                                        {"¿No tienes una cuenta? Registrate"}
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
            <AlertDialog
                open={openErrorModal}
                title="¡Error al iniciar sesión!"
                message="Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo."
                onClose={handleCloseAlert}
                onConfirm={handleCloseAlert}
            />
            <AlertDialog
                open={openSuccessModal}
                title="Iniciar sesion"
                message="¡Inicio de sesión exitoso!"
                onClose={handleCloseAlert}
                onConfirm={handleCloseAlert}
            />
        </Container>
    );
};

