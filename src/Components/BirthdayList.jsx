import React, { useEffect, useState } from "react";
import { List, Typography } from "@material-ui/core";
import BirthdayListItem from "./BirthdayListItem";
import FullWidthButton from "./FullWidthButton";

const url = "https://api.randomuser.me/";

const BirthdayList = () => {
    const [peopleList, setPeopleList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFakePeopleBirthday = async () => {
        setLoading(true);
        for (let i = 0; i < 5; i++) {
            const response = await fetch(url);
            const data = await response.json();
            setPeopleList((previousState) => {
                const person = {
                    id: data.results[0].email,
                    name:
                        data.results[0].name.title +
                        " " +
                        data.results[0].name.first +
                        " " +
                        data.results[0].name.last,
                    age: data.results[0].dob.age,
                    gender: data.results[0].gender,
                    image: data.results[0].picture.medium,
                };
                const newState = [...previousState, person];
                return newState;
            });
            if (i === 4) setLoading(false);
        }
    };

    const clearPeopleList = () => {
        setPeopleList([]);
    };
    const clearPeopleListByID = (id) => {
        const newList = peopleList.filter((person) => person.id !== id);
        setPeopleList(newList);
    };

    useEffect(() => {
        getFakePeopleBirthday();
    }, []);

    return (
        <>
            <List>
                {peopleList.map((person) => {
                    return (
                        <BirthdayListItem
                            key={person.id}
                            {...person}
                            clearPeopleListByID={clearPeopleListByID}
                        />
                    );
                })}
            </List>
            {loading && (
                <Typography align="center" variant="h5">
                    Loading...
                </Typography>
            )}
            <FullWidthButton
                color="primary"
                callbackFunc={getFakePeopleBirthday}
            >
                Get More People to Wish
            </FullWidthButton>
            <FullWidthButton color="secondary" callbackFunc={clearPeopleList}>
                Clear All
            </FullWidthButton>
        </>
    );
};

export default BirthdayList;
