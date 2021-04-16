import React from "react";
import { Card, Typography, CardContent } from "@material-ui/core";
import BirthdayList from "./BirthdayList";

const CardContainer = () => {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography align="center" variant="h4" component="h1">
                        Birthdays Today
                    </Typography>
                    <BirthdayList />
                </CardContent>
            </Card>
        </>
    );
};

export default CardContainer;
