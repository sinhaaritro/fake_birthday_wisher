import React from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemAvatar,
    Typography,
    Button,
} from "@material-ui/core";

const BirthdayListItem = ({
    id,
    name,
    age,
    gender,
    image,
    clearPeopleListByID,
}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>{/* <FolderIcon /> */}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} secondary={`${age}  years old`} />
            <ListItemSecondaryAction>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => clearPeopleListByID(id)}
                >
                    <Typography variant="button">
                        {gender === "male" ? "Wish Him!" : "Wish Her!"}
                    </Typography>
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

BirthdayListItem.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    gender: PropTypes.string,
    clearPeopleListByID: PropTypes.func,
};

export default BirthdayListItem;
