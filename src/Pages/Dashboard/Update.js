import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import EditProfile from './EditProfile';

const Update = () => {

    return (
        <div>
            {
                profileData.map(profile => <EditProfile
                key={profile._id}
                profile={profile}
                ></EditProfile>)
            }
        </div>
    );
};

export default Update;