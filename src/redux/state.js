let state = {
    profilePage: {
        dataPosts: [
            {id: 1, text: 'Привет', likes: 12},
            {id: 2, text: 'Как дела?', likes: 5},
            {id: 3, text: 'Заебись, братан', likes: 50},
            {ia: 4, text: 'Четко!', likes: 11}
        ]
    },
    messagesPage: {
        dataMessages: [
            {id:1, messageText: 'Hello'},
            {id:2, messageText: 'How are you?'},
            {id:3, messageText: 'I am fine, thank u. And you?'},
            {ia:4, messageText: 'I am too'}
        ],
        dataDialogs: [
            {id:1, name: 'LeBron'},
            {id:2, name: 'Wade'},
            {id:3, name: 'Curry'},
            {ia:4, name: 'Jordan'}
        ]
    },
    navBarListData: [
        {id:1, name: 'Profile'},
        {id:2, name: 'Messages'},
        {id:3, name: 'News'},
        {id:4, name: 'Music'},
        {ia:5, name: 'Settings'}
    ],
};

export default state;