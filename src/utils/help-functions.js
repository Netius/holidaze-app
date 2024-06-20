import { UPLOAD_URL } from "../constants/api";

export async function addImageHotel(formFile, id, token) {
    if (!formFile) return;

    var formData = new FormData();

    formData.append("files", formFile.files[0]);
    formData.append('refId', id);
    formData.append('ref', 'api::hotels.hotel'); // #TODO Getting error adding image to Strapi
    formData.append('field', "image");

    const options = {
        method: "POST",
        body: formData,
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    try {
        const response = await fetch(UPLOAD_URL, options);
        if (!response.ok) {
            console.error("Error: Image to hotel not uploaded.")
        }

    } catch (error) {
        console.log(error);
    }
}

export function calculateRating(hotel) {
    let averageRatings = 0;
    const ratings = hotel.attributes?.hotels_messages?.data.map((h) => h.attributes.rating);
    if (ratings?.length > 0) {
        averageRatings = Math.round(ratings.reduce((total, next) => total + next, 0) / ratings.length);
    }
    return averageRatings;
}