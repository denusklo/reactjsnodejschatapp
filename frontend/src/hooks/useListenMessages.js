import React, { useEffect } from 'react'
import { useSocketContext } from '../context/socket.context'
import useConversation from "../zustand/useConversation.js";
import notificationSound from "../assets/sounds/mixkit-cooking-stopwatch-alert-1792.wav"
const useListenMessages = () => {
  
    const {socket} = useSocketContext();
    const { messages, setMessages } = useConversation();
    
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notificationSound);
            sound.play();
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage");

    }, [socket, setMessages, messages])
}

export default useListenMessages