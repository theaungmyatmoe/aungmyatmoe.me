export function formatDate(datetime) {
    return new Date(datetime).toLocaleDateString([], {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    })

};
