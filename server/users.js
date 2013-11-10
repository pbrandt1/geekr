/**
 * Users api
 * 
 * /api/users/[id]
 * 
*/
var _ = require('lodash');
var MockCollection = require('./mockmongo').MockCollection;


var MOCK_USERS = [
    {
        _id: "a1",
        firstName: "Brendan",
        lastName: "Briggs",
        displayName: "Brendan Briggs",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.98998,
            latitude: 40.715395   
        },
        globalRating: 8,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Hey! Come hang out with me and watch Korean films ^^",
        sexPreference: ["Female"],
        picture: {
            id: 1,
            uri: "/img/avatars/a1.jpg",
            width: 816,
            height: 513,
            focusCenter: {x: 306, y: 247},
            focusWidth: 221
        }
    },
    {
        _id: "a2",
        firstName: "Cat",
        lastName: "Kitly",
        displayName: "Kitty Cat",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.98498,
            latitude: 40.715495   
        },
        globalRating: 8,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Hey! Come hang out with me and watch Korean films ^^",
        sexPreference: ["Female", "Male"],
        picture: {
            id: 2,
            uri: "/img/avatars/a2.jpg",
            width: 816,
            height: 513,
            focusCenter: {x: 400, y: 256},
            focusWidth: 221
        }
    },
    {
        _id: "a5",
        firstName: "Georgina",
        lastName: "Menstratapause",
        displayName: "Princes Georgina",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.91998,
            latitude: 40.715395   
        },
        globalRating: 5,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Hey! Come hang out with me and watch Korean films ^^",
        sexPreference: ["Female", "Male"],
        picture: {
            id: 5,
            uri: "/img/avatars/a5.jpg",
            width: 816,
            height: 513,
            focusCenter: {x: 400, y: 256},
            focusWidth: 221
        }
    },
    {
        _id: "a6",
        firstName: "Ellaria",
        lastName: "Sand",
        displayName: "Ellaria Sand",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.98918,
            latitude: 40.715315   
        },
        globalRating: 10,
        pinnedUserIds: ["a2", "a3"],
        tagline: "I will seek vengeance until my spilled blood dries in the desert from whence it came.",
        sexPreference: ["Female", "Male"],
        picture: {
            id: 6,
            uri: "/img/avatars/a6.jpg",
            width: 816,
            height: 513,
            focusCenter: {x: 400, y: 256},
            focusWidth: 221
        }
    },
    {
        _id: "a7",
        firstName: "Ping",
        lastName: "Phun",
        displayName: "Ping Phun",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.88998,
            latitude: 40.815395   
        },
        globalRating: 8,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Hey! Come hang out with me and watch Vietnamese films ^^",
        sexPreference: ["Female"],
        picture: {
            id: 7,
            uri: "/img/avatars/a7.jpg",
            width: 816,
            height: 513,
            focusCenter: {x: 400, y: 256},
            focusWidth: 221
        }
    },
    {
        _id: "a8",
        firstName: "Felicia",
        lastName: "Day",
        displayName: "Felicia Day",
        location: {
            timestamp: 1384029033407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.98998,
            latitude: 40.715395   
        },
        globalRating: 8,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Superhero by day, nerd sex idol by night.",
        sexPreference: ["Male"],
        picture: {
            id: 8,
            uri: "/img/avatars/a8.jpg",
            width: 1920,
            height: 1080,
            focusCenter: {x:727, y:240},
            focusWidth: 240
        }
    },
    {
        _id: "a9",
        firstName: "Buffy",
        lastName: "the Vampire Slayer",
        displayName: "Buffy the Vampire Slayer",
        location: {
            timestamp: 1384029063407,
            // https://www.google.com/maps?ll=40.715395,-73.98998&spn=0.007603,0.016512&t=m&z=17
            longitude: -73.98198,
            latitude: 40.725395   
        },
        globalRating: 10,
        pinnedUserIds: ["a2", "a3"],
        tagline: "Fuck the servants of the night.  Fuck them often.",
        sexPreference: ["Female", "Male"],
        picture: {
            id: 9,
            uri: "/img/avatars/a9.jpg",
            width: 1024,
            height: 768,
            focusCenter: {x: 490, y: 200},
            focusWidth: 200
        }
    }
];

var setupUserAPI = function(expressApp) {
    var _users = new MockCollection(MOCK_USERS); // can set this to a mongodb collection eventually
    
    expressApp.get('/api/users/:id', function(req, res) {
        var users = _users.findById(req.params.id);
        var returnVal = [];
        for (var i = 0, length = users.length; i < length; i++) {
            returnVal.push({
                id: users[i]._id,
                displayName: users[i].displayName,
                lastName: users[i].lastName,
                firstName: users[i].firstName,
                distanceFromMe: 0, //TODO implement location tools. get location from client
                picture: users[i].picture,
                tagline: users[i].tagline,
                sexPreference: users[i].sexPreference,
                globalRating: users[i].globalRating,
                location: users[i].location
            })
        }
        res.send({users: returnVal});
    });
    
    expressApp.get('/api/users', function(req, res) {
        var users = _users.find();
        var userArr = [];
        var avatarArr = [];
        for (var i = 0, length = users.length; i < length; i++) {
            userArr.push({
                id: users[i]._id,
                displayName: users[i].displayName,
                lastName: users[i].lastName,
                firstName: users[i].firstName,
                distanceFromMe: 0, //TODO implement location tools. get location from client
                avatar: users[i].picture.id,
                tagline: users[i].tagline,
                sexPreference: users[i].sexPreference,
                globalRating: users[i].globalRating,
                location: users[i].location
            });
            avatarArr.push(users[i].picture);
        }
        res.send({users: userArr, avatars:avatarArr});
    });
};


module.exports = exports = {setupUserAPI: setupUserAPI};


