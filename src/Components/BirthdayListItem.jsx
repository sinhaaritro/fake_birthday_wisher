import React from "react";
import PropTypes from "prop-types";
import {
    Avatar,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    ListItemAvatar,
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
                <Avatar alt={name} src={image} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={`${age}  years old`} />
            <ListItemSecondaryAction>
                <Button color="primary" onClick={() => clearPeopleListByID(id)}>
                    {"Wish " + (gender === "male" ? "Him" : "Her") + "!"}
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
