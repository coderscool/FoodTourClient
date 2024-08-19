import { useSelector } from "react-redux"
import { selectUser } from "../Reducers/userSlice"
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr'
const Notification = () => {
    const userId = "66682064c07de49ac7957fa8"
    const connection = new HubConnectionBuilder()
            .withUrl(`https://localhost:7252/notification?userId=${userId}`)
            .configureLogging(LogLevel.Information)
            .build();

        connection.on("ReceiveNotification", function (message) {
            console.log(message)
        });

        connection.onclose(async () => {
            console.log("Disconnected. Attempting to reconnect...");
            await connection.start();
        });
        
        connection.start().catch(function (err) {
            return console.error(err.toString());
        });
    return(
        <>
            <p>Notification</p>
        </>
    )
}
export default Notification