export const ADD_BOOKING = 'ADD_BOOKING'

export const addBooking = (postItems) => {
    return {
        type: ADD_BOOKING,
        bookingData: {
            items: postItems
        }
    }
}