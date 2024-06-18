"use client";

import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';
import { Snackbar } from '@mui/material';


export default function CreatePost() {
    const [formData, setFormData] = useState({
        title: '',
        id: '',
        body: ''
    });

    const [formErrors, setFormErrors] = useState({
        title: false,
        id: false,
        body: false
    });

    const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (formData.title.trim() === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                title: true
            }));
            return;
        }
        if (formData.id.trim() === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                id: true
            }));
            return;
        }
        if (formData.body.trim() === '') {
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                body: true
            }));
            return;
        }

        // Reset form after submission
        setFormData({
            title: '',
            id: '',
            body: ''
        });

        // Reset errors
        setFormErrors({
            title: false,
            id: false,
            body: false
        });

        // Show success alert
        setOpenSnackbar(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));

        // Reset error state for current field on change
        setFormErrors((prevErrors) => ({
            ...prevErrors,
            [name]: false
        }));
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    return (
        <div style={{ width: '100%' }}>

            <h1 style={{ padding: "1rem 0.5rem" }}><span style={{ color: "rgb(238, 164, 80)" }}>Create</span> Post</h1>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': { m: 1, width: 'fitContent' },
                    display: 'flex',
                    flexDirection: 'column',
                    width: '90%',
                    margin: 'auto',
                    gap: 1,
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="title"
                    name="title"
                    label="Title"
                    variant="filled"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    error={formErrors.title}
                    helperText={formErrors.title ? 'Title is required' : ''}
                />

                <TextField
                    id="id"
                    name="id"
                    label="Post ID"
                    variant="filled"
                    value={formData.id}
                    onChange={handleChange}
                    required
                    error={formErrors.id}
                    helperText={formErrors.id ? 'Post ID is required' : ''}
                />

                <TextField
                    id="body"
                    name="body"
                    label="Post Body"
                    variant="filled"
                    value={formData.body}
                    onChange={handleChange}
                    required
                    multiline
                    rows={4}
                    error={formErrors.body}
                    helperText={formErrors.body ? 'Post Body is required' : ''}
                />

                <Button
                    variant="contained"
                    color='warning'
                    type="submit"
                    sx={{ width: 'fit-content', alignSelf: 'flex-start' }}
                >
                    Submit
                </Button>
            </Box>

            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    Post Created Successfully
                </Alert>
            </Snackbar>
        </div>
    );
}


