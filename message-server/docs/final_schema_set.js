// User Schema
[
    {
        username: String,
        first_name: String,
        last_name: String,
        email: String,
        profile_image: Buffer,
        password: String,
        friends: [
            {
                username: String,
                user_id: UserId
            }
        ],
        blocked_users: [UserId],
        requests: [RequestId],
        chat_sessions: [ChatId],
        tokens: [String]
    }
]
    
// Request Schema
[
    {
        type: {
            enum: ["friend_request", "chat_invite"]
        },
        sender: {
            username: String,
            user_id: UserId,
        },
        receiver: {
            username: String,
            user_id: UserId,
        },
        timestamp: Date,

        // chat invite fields:
        chat: {                     // optional
            name: String,
            chat_id: ChatId,
        },
    }
]
    
// Chat Schema
[
    {
        chat_type: {
            enum: ["direct", "group"]
        },
        message_buckets: [MessageBucketId],
        users: [
            {
                username: String,
                user_id: UserId,
            }
        ],
        pinned_messages: [
            {
                content: String,
                timestamp: Date,
                sender: UserId,
                message_id: MessageId
            }
        ],
        
        // group chat fields:
        group_name: String,         // optional
        owner: {                    // optional
            username: String,
            user_id: UserId
        },
        logo: Buffer,               // optional
        background: String,         // optional
        banned_users: [UserId],     // optional
        invited_users: [UserId],    // optional
        visible: Boolean            // optional
    }
];

// Message Bucket Schema
[
    {
        chat_id: ChatId,
        start_date: Date,
        end_date: Date,
        size: Number,
        messages: [
            {
                content: String,
                timestamp: Date,
                sender: UserId,
            },
        ]
    }
]

// Broadcast Post Bucket Schema
[
    {
        start_date: Date,
        end_date: Date,
        size: Number,
        posts: [
            {
                poster: {
                    username: String,
                    user_id: UserId
                },
                content: String,
                timestamp: Date,
                comments: [PostBucketId], // optional, list of post buckets to hold only this post's comments
            }
        ]
    }
]