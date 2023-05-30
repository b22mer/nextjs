//our-domain.com/new-meetup
//중첩 라우트 방식은 하위폴더로 설정

import React from 'react';
import NewMeetupForm from './../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
    const addMeetupHandler =(enteredMeetupData)=> {
        console.log(enteredMeetupData);
    }
    return (
     <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    );
};

export default NewMeetupPage;