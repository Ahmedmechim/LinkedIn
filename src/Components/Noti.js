import { Badge } from 'antd'
import NotificationsIcon from "@material-ui/icons/Notifications";
import React from 'react'

const Noti = () => {
    return (
        <div>
            <Badge count={5} offset={[0, 10]} >
            <NotificationsIcon />
          </Badge>
        </div>
    )
}

export default Noti
