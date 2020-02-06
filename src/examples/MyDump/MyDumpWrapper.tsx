import * as React from 'react';
import { useState } from "react";
import MyDump from "./MyDump";
import { Button } from '@material-ui/core';
import { Paper } from '@material-ui/core';


export type DumpProps = {
    text?: String
};
export const MyDumpWrapper = (props: DumpProps) => {
    const [dump, setDump] = useState('START');
    console.log('Wrapper')
    return (
        <Paper elevation={3} style={wrapperStyles.wrapper}>
            Wrapper {dump}
            <div style={wrapperStyles.buttonContainer}>
                <Button size="small" variant="contained" color="secondary" onClick={() => setDump('FIRST BUTTON')}>Button </Button>
                <Button size="small" variant="contained" color="secondary" onClick={() => setDump('SECOND BUTTON')}>Button </Button>
                <Button size="small" variant="contained" color="secondary" >Button </Button>
            </div>
            <MyDump />
        </Paper>
    );
};

export const wrapperStyles = {
    wrapper: {
        padding: '15px',
        marginTop: '15px'
    },
    buttonContainer: {
        display: 'grid',
        gridAutoFlow: 'column',
        gridGap: '10px',
        gridAutoColumns: 'max-content',
        padding: '10px 0',
    },
}
