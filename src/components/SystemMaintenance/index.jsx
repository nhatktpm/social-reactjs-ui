import { Box, Typography } from '@material-ui/core';
import React from 'react';

function SystemMainenance(props) {
    return (
        <Box textAlign="center">
            <Typography variant='h2'>System Mainenance</Typography>
            <Typography mt={2}>Something has gone wrong on our end. We apologize for the inconvenience</Typography>
        </Box>
    );
}

export default SystemMainenance;
