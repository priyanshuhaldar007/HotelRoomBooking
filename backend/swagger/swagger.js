const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hotel Booking Swagger Documentation",
            version: "1.0.0",
            description: "A simple GET API created with Node.js and Express",
        },
        servers: [
            {
                url: "http://localhost:5000",
                description: "Development server",
            },
        ],
        paths: {
            "/signup": {
                post: {
                    summary: "Register a User",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                        },
                                        email: {
                                            type: "string",
                                        },
                                        mob: {
                                            type: "number",
                                        },
                                        password: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: "User Created successfully",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            user: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description: "Unable to create user",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    tags: ["Authentication Route"],
                },
            },
            "/login": {
                post: {
                    summary: "Sign In",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        email: {
                                            type: "string",
                                        },
                                        password: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: "User Logged In successfully",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            token: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description: "Unable to log in user",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            error: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    tags: ["Authentication Route"],
                },
            },
            "/user/profile": {
                post: {
                    summary: "Update user Details",
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string",
                                        },
                                        email: {
                                            type: "string",
                                        },
                                        mob: {
                                            type: "number",
                                        },
                                        password: {
                                            type: "string",
                                        },
                                        address: {
                                            type: "string",
                                        },
                                        country: {
                                            type: "string",
                                        },
                                        token: {
                                            type: "string",
                                        },
                                    },
                                },
                            },
                        },
                    },
                    responses: {
                        201: {
                            description: "User Details updated successfully",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            updatedDetails: {
                                                type: "object",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        401: {
                            description: "Unable to update user",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    tags: ["User Route"],
                },
                get: {
                    summary: "Get User Details",
                    parameters: [
                        {
                            name: "token",
                            in: "query",
                            description:
                                "userToken stored in localstorage upon login",
                            required: true,
                            schema: {
                                type: "string",
                            },
                        },
                    ],
                    responses: {
                        201: {
                            description: "User Logged In successfully",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            token: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description: "Unable to log in user",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            error: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    tags: ["User Route"],
                },
            },
            "/user/history": {
                get: {
                    summary: "Get User Booking History",
                    parameters: [
                        {
                            name: "token",
                            in: "query",
                            description:
                                "userToken stored in localstorage upon login",
                            required: true,
                            schema: {
                                type: "string",
                            },
                        },
                    ],
                    responses: {
                        201: {
                            description: "User Bookings Found",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                            history: {
                                                type: "array",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        202: {
                            description: "No Bookings found",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                        400: {
                            description: "Error finding history",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string",
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                    tags: ["User Route"],
                },
            },
            // "/user/bookhotel": {
            //     post: {
            //         summary: "Book Hotel",
            //         requestBody: {
            //             content: {
            //                 "application/json": {
            //                     schema: {
            //                         type: "object",
            //                         properties: {
            //                             hotelName: {
            //                                 type: "string",
            //                             },
            //                             hotelId: {
            //                                 type: "string",
            //                             },
            //                             BookingDuration: {
            //                                 type: "number",
            //                             },
            //                             city: {
            //                                 type: "string",
            //                             },
            //                             roomId: {
            //                                 type: "string",
            //                             },
            //                             NoOfPersons: {
            //                                 type: "string",
            //                             },
            //                             TotalPrice: {
            //                                 type: "string",
            //                             },
            //                             token: {
            //                                 type: "string",
            //                             },
            //                         },
            //                     },
            //                 },
            //             },
            //         },
            //         responses: {
            //             201: {
            //                 description: "User Details updated successfully",
            //                 content: {
            //                     "application/json": {
            //                         schema: {
            //                             type: "object",
            //                             properties: {
            //                                 message: {
            //                                     type: "string",
            //                                 },
            //                                 updatedDetails: {
            //                                     type: "object",
            //                                 },
            //                             },
            //                         },
            //                     },
            //                 },
            //             },
            //             401: {
            //                 description: "Unable to update user",
            //                 content: {
            //                     "application/json": {
            //                         schema: {
            //                             type: "object",
            //                             properties: {
            //                                 message: {
            //                                     type: "string",
            //                                 },
            //                             },
            //                         },
            //                     },
            //                 },
            //             },
            //         },
            //         tags: ["User Route"],
            //     },
            // },
            
        },
    },
    apis: ["./index.js", "./routes/*.js"],
};

module.exports = options;
