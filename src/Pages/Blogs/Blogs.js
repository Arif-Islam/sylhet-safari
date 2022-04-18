import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-4xl lg:text-6xl w-11/12 lg:w-9/12 2xl:w-2/3 mx-auto my-6'>Posts</h1>
            {/* QnA Section */}
            <div className=''>
                <div className='text-center w-11/12 lg:w-9/12 2xl:w-2/3 mx-auto my-12'>
                    <div>
                        <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans text-stone-800'>Difference between Authorization and Authentication</h1>
                        <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>Before users are granted system access, their identities are verified throughout the authentication process. During the authorization process, the person's or user's authority to access the resources is validated. In authentication procedure, users or persons are verified. While in this process, users or persons are validated. Authentication is required as part of the permission process. After the authentication process, the authorization procedure is carried out.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans text-stone-800'>Why are you using Firebase? What other options do you have to implement authentication?</h1>
                        <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>Firebase Authentication helps building safe authentication systems as well as end-user sign-in simple. It's a complete identity management solution that incorporates email and password authentication, as well as logins to Google, Twitter, Facebook, and GitHub. Also there is some library available for firebase hooks that lets me feel comfortable to develop an authentication solution. This is why I've chosen to use Firebase. The most popular alternatives to Firebase authentication are Auth0, MongoDB, Passport, and Okta.</p>
                    </div>
                    <div>
                        <h1 className='text-left font-bold text-2xl 2xl:text-4xl mb-4 xl:mb-6 font-sans text-stone-800'>What other services does firebase provide other than authentication?</h1>
                        <p className='text-justify text-gray-800 text-lg mb-4 xl:mb-6'>Firebase offers a wide range of services. They are- 
                            <ul>
                                <li>Hosting</li>
                                <li>Google Analytics</li>
                                <li>Cloud Messaging</li>
                                <li>Cloud Storage</li>
                                <li>Cloud Functions</li>
                                <li>Information</li>
                                <li>Predictions</li>
                            </ul>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Blogs;