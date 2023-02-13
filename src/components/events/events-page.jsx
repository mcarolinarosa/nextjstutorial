import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsCityPage = ({ data }) => {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
                    <Image
                        src={ev.image}
                        alt={ev.title}
                        width={500}
                        height={500}
                    />
                    <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    );
};

export default EventsCityPage;
