import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const SingleEvent = ({ event }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router?.query.event;

        const validRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (!emailValue.match(validRegex)) {
            setMessage("please input a valid address ");
        }
        try {
            const response = await fetch("/api/email-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ emailValue, eventId })
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            const data = await response.json();

            setMessage(data.message);
            inputEmail.current.value = "";
        } catch (e) {
            console.log("ERROR", e);
        }
    };

    return (
        <div className="single_event_page">
            <Image
                src={event.image}
                width={1000}
                height={500}
                alt={event.title}
            />
            <h1>{event.title}</h1>
            <p>{event.description}</p>
            <form onSubmit={onSubmit} className="email_registration">
                <label>Get registered for this event!</label>
                <input
                    ref={inputEmail}
                    type="email"
                    id="email"
                    placeholder="Please insert your email here"
                />{" "}
                <button>Submit</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default SingleEvent;
