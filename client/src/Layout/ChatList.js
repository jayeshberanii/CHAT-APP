import React from 'react'

function ChatList() {
    return (
        <>
            <li className="active">
                <div className="d-flex bd-highlight">
                    <div className="img_cont">
                        <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" className="rounded-circle user_img" alt='img'/>
                        <span className="online_icon"></span>
                    </div>
                    <div className="user_info">
                        <span>jassa</span>
                        <p>Kalid is online</p>
                    </div>
                </div>
            </li>
        </>
    )
}

export default ChatList