import CatEvent from "@/src/components/events/cat-event";

const EventsCatPage = ({ data, pageName }) => {
    return <CatEvent data={data} pageName={pageName} />;
};

export default EventsCatPage;

export async function getStaticPaths() {
    const { events_categories } = await import("/data/data.json");
    const allPaths = events_categories.map((ev) => {
        return {
            params: {
                cat: ev.id.toString()
            }
        };
    });

    return {
        paths: allPaths,
        fallback: false
    };
}

export async function getStaticProps(context) {
    const pageName = context?.params.cat;

    const { allEvents } = await import("/data/data.json");

    const data = allEvents.filter((ev) => ev.city === pageName);

    return {
        props: { data, pageName }
    };
}
