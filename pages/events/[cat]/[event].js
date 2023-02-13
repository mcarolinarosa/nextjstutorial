import SingleEvent from "@/src/components/events/single-event";
import Image from "next/image";

const SingleEventPage = ({ event }) => {
    return <SingleEvent event={event} />;
};

export default SingleEventPage;

export async function getStaticPaths() {
    const { allEvents } = await import("data/data.json");

    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                event: path.id
            }
        };
    });

    return {
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const eventId = context.params.event;

    const { allEvents } = await import("data/data.json");

    const event = allEvents.find((ev) => ev.id === eventId);

    return { props: { event } };
}
