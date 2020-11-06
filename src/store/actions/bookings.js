import Booking from '../../models/booking'

export const ADD_BOOKING = 'ADD_BOOKING'
export const SET_BOOKINGS = 'SET_BOOKINGS'

export const fetchBookings = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://rn-babekost.firebaseio.com/bookings/u1.json')

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }

            const resData = await response.json()
            const loadedBookings = []

            for (const key in resData) {
                loadedBookings.push(
                    new Booking(
                        key,
                        resData[key].bookingItems,
                        resData[key].totalAmount,
                        new Date(resData[key].date)
                    )
                )
            }

            dispatch({
                type: SET_BOOKINGS,
                bookings: loadedBookings
            })

        } catch (err) {
            throw err
        }
    }
}


export const addBooking = (postItems) => {
    return {
        type: ADD_BOOKING,
        bookingData: {
            items: postItems
        }
    }
}