import React from 'react';

const UserProfile = () => {
    // Mock user data for now
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        bio: 'I am a software engineer who loves coding!',
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-info">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Bio:</strong> {user.bio}</p>
            </div>
        </div>
    );
};

export default UserProfile;
