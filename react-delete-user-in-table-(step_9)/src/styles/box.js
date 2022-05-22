import {
    Box,
    Typography,
    withStyles
} from "@material-ui/core";

export const DefaultContainerBox = withStyles(() => ({
    root: {
        display: 'grid',
        placeContent: 'center',
        textAlign: 'center',
    }
}))(Box);

export const DefaultContainerInnerBox = withStyles(() => ({
    root: {
        width: '480px',
        height: '560px',
        marginTop: 16,
        alignItems: 'center',
        borderRadius: '8px',
        backgroundColor: '#EEF8FA',
        border: '1px solid #EEF8FA',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    }
}))(Box);

export const TitleTypography = withStyles(() => ({
    root: {
        marginBottom: 8
    }
}))(Typography);